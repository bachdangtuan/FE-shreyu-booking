import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

export function SyncQueryParam(
    config: any = {
        parseIgnore: [],
    }
): Function {
    return function (target: any, propertyKey: string): any {
        let srcSearchObj: any;
        let activatedRoute: ActivatedRoute;
        let router: Router;
        const ngOnInitUnPatched = target.ngOnInit;

        target.ngOnInit = function (this) {
            activatedRoute = this.injector.get(ActivatedRoute);
            router = this.injector.get(Router);

            // sync form to params
            if (target[propertyKey] instanceof FormGroup && target[propertyKey]) {
                target[propertyKey].valueChanges.subscribe((v: any) => {
                    syncObjectToParams(activatedRoute, router, v);
                });

                const objectSearchParams = target[propertyKey]?.getRawValue();
                const activeQueryParams = activatedRoute.snapshot.queryParams;
                if (
                    Object.keys(objectSearchParams)?.length &&
                    !Object.keys(activeQueryParams)?.length
                ) {
                    syncObjectToParams(activatedRoute, router, objectSearchParams);
                }
            }

            // subscribe URL params change to sync search form
            activatedRoute.queryParams.subscribe((params) => {
                const searchObjParams = srcSearchObj.getRawValue();
                const tmp = JSON.parse(JSON.stringify(params));
                const _params = { ...searchObjParams, ...tmp };

                Object.keys(_params)?.forEach((k) => {
                    if (_params[k] && _params[k]?.indexOf(";") !== -1) {
                        _params[k] = _params[k]?.split(";");
                        _params[k] = _params[k]?.filter((i: any) => !!i);

                        const _isTypeNumber = typeof _params[k] === "number";
                        if (_isTypeNumber)
                            _params[k] = _params[k]?.map((i: number) => (isNaN(i) ? i : +i));
                    } else {
                        if (!config.parseIgnore.includes(k)) {
                            _params[k] =
                                isNaN(_params[k]) || !_params[k] ? _params[k] : +_params[k];
                        }
                    }
                });
                if (target[propertyKey] instanceof FormGroup && target[propertyKey]) {
                    target[propertyKey].patchValue(_params, { emitEvent: false });

                    if (typeof _params === "object" && Object.keys(_params).length > 0) {
                        if (target[propertyKey].get("skipDefaultValue")) {
                            target[propertyKey].get("skipDefaultValue").setValue(true);
                        } else {
                            target[propertyKey].addControl(
                                "skipDefaultValue",
                                new FormControl(true)
                            );
                        }
                    }
                } else if (typeof target[propertyKey] === "object") {
                    target[propertyKey] = _params;
                }
            });
            if (ngOnInitUnPatched) {
                return ngOnInitUnPatched.call(this);
            }
        };
        function getter() {
            return srcSearchObj;
        }
        function setter(value: any) {
            srcSearchObj = value;
        }
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}

function syncObjectToParams(
    activatedRoute: ActivatedRoute,
    router: Router,
    obj: any
) {
    if (activatedRoute) {
        const params = {};
        buildHTTPGetParamsFromObject(obj, params);
        router
            .navigate(["."], {
                relativeTo: activatedRoute,
                queryParams: params,
            })
            .then();
    }
}

export function buildHTTPGetParamsFromObject(
    obj: { [x: string]: any },
    params: any
) {
    params = params || {};
    Object.keys(obj).forEach((key) => {
        const controlValue = obj[key];
        if (Array.isArray(controlValue) && controlValue.length > 0) {
            params[key] = "";
            controlValue.forEach((v) => {
                params[key] += v + ";";
            });
            return;
        }

        if (controlValue instanceof Date) {
            // params[key] = toISOStringWithoutTimeZone(controlValue).toISOString();
            params[key] = controlValue.toISOString();
        } else if (typeof controlValue === "object" && controlValue) {
            buildHTTPGetParamsFromObject(controlValue, params);
        } else if (controlValue !== null) {
            params[key] = controlValue;
        }
    });
}


