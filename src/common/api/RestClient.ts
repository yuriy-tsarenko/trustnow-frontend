import {AxiosInstance, AxiosResponse} from "axios";

export interface UrlParameter {
    paramName: string,
    paramValue: string | number
}

export class RestClient<T> {
    private axiosInstance: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    async GET(endpoint: string,
              authToken: string,
              pathVariables: string[] | number[]  = [],
              queryParams: UrlParameter[] = []): Promise<T[]> {
        const url = this.constructUrl(endpoint, pathVariables, queryParams);
        let requestConfig = {
            headers: {"Authorization": `${authToken}`}
        };
        return await this.axiosInstance
            .get<T[]>(url, requestConfig)
            .then((response: AxiosResponse<T[]>) => response.data);
    }

    async POST<R>(endpoint: string,
                  requestBody: R,
                  authToken: string,
                  pathVariables: string[] | number[] = [],
                  queryParams: UrlParameter[] = []): Promise<T> {
        const url = this.constructUrl(endpoint, pathVariables, queryParams);
        let requestConfig = {
            headers: {"Authorization": `${authToken}`}
        };
        return await this.axiosInstance
            .post(url, JSON.stringify(requestBody), requestConfig)
            .then((response: AxiosResponse<T>) => response.data);
    }

    async PUT<R>(endpoint: string,
                 requestBody: R,
                 authToken: string,
                 pathVariables: string[] | number[]  = [],
                 queryParams: UrlParameter[] = []): Promise<T> {
        const url = this.constructUrl(endpoint, pathVariables, queryParams);
        let requestConfig = {
            headers: {"Authorization": `${authToken}`}
        };
        return await this.axiosInstance
            .put<T>(url, JSON.stringify(requestBody), requestConfig)
            .then((response: AxiosResponse<T>) => response.data);
    }

    async PATCH<R>(endpoint: string,
                   requestBody: R,
                   authToken: string,
                   pathVariables: string[] | number[]  = [],
                   queryParams: UrlParameter[] = []): Promise<T> {
        const url = this.constructUrl(endpoint, pathVariables, queryParams);
        let requestConfig = {
            headers: {"Authorization": `${authToken}`}
        };
        return await this.axiosInstance
            .patch<T>(url, JSON.stringify(requestBody), requestConfig)
            .then((response: AxiosResponse<T>) => response.data);
    }

    async DELETE(endpoint: string,
                 authToken: string,
                 pathVariables: string[] | number[]  = [],
                 queryParams: UrlParameter[] = []): Promise<T> {
        const url = this.constructUrl(endpoint, pathVariables, queryParams);
        let requestConfig = {
            headers: {"Authorization": `${authToken}`}
        };
        return await this.axiosInstance
            .delete<T>(url, requestConfig)
            .then((response: AxiosResponse<T>) => response.data);
    }

    private constructUrl(endpoint: string,
                         pathVariables: string[] | number[] ,
                         queryParams: UrlParameter[]): string {
        pathVariables.forEach((variable) => {
            endpoint = endpoint.replace(/{\w+}/, variable.toString());
        });
        return this.addQueryParams(endpoint, queryParams);
    }

    private addQueryParams(url: string, parameters: UrlParameter[]): string {
        if (typeof parameters !== "undefined" && parameters.length > 0) {
            for (let index = 0; index < parameters.length; index++) {
                const urlParameter = parameters[index];
                const paramName = urlParameter.paramName;
                let paramValue = urlParameter.paramValue;
                if (typeof paramValue == "string") {
                    paramValue = paramValue.replaceAll(" ", "+");
                }

                if (index == 0) {
                    url = url.concat("?");
                } else {
                    url = url.concat("&");
                }
                url = url.concat(paramName, "=", String(paramValue));
            }
        }
        return url;
    };
}
