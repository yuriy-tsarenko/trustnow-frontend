import axios, {AxiosInstance} from "axios";
import {RestClient, UrlParameter} from "./RestClient";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("RestClient", () => {
    let client: RestClient<any>;
    const testToken = "test-token";

    beforeEach(() => {
        client = new RestClient(mockedAxios as unknown as AxiosInstance);
    });

    describe("GET method", () => {
        it("should send a GET request with correct parameters", async () => {
            const endpoint = "/test";
            const queryParams: UrlParameter[] = [{paramName: "param1", paramValue: "value1"}];
            const responseData = [{data: "response"}];

            mockedAxios.get.mockResolvedValue({data: responseData});

            const result = await client.GET(endpoint, testToken, [], queryParams);

            expect(mockedAxios.get).toHaveBeenCalledWith("/test?param1=value1", {
                headers: {"Authorization": "test-token"}
            });
            expect(result).toEqual(responseData);
        });
    });

    describe("POST method", () => {
        it("should send a POST request with the correct body and parameters", async () => {
            const endpoint = "/test/{id}";
            const pathVariables = ["123"]; // Include the path variable
            const queryParams: UrlParameter[] = [{paramName: "param1", paramValue: "value1"}];
            const requestBody = {key: "value"};
            const responseData = {data: "response"};

            mockedAxios.post.mockResolvedValue({data: responseData});

            const result = await client.POST(endpoint, requestBody, testToken, pathVariables, queryParams);

            expect(mockedAxios.post).toHaveBeenCalledWith("/test/123?param1=value1", JSON.stringify(requestBody), {
                headers: {"Authorization": testToken}
            });
            expect(result).toEqual(responseData);
        });
    });

    describe("PUT method", () => {
        it("should send a PUT request with the correct body and parameters", async () => {
            const endpoint = "/test/{id}";
            const pathVariables = ["123"];
            const queryParams: UrlParameter[] = [{paramName: "param1", paramValue: "value1"}];
            const requestBody = {key: "updatedValue"};
            const responseData = {data: "response"};

            mockedAxios.put.mockResolvedValueOnce({data: responseData});

            const result = await client.PUT(endpoint, requestBody, testToken, pathVariables, queryParams);

            expect(mockedAxios.put).toHaveBeenCalledWith("/test/123?param1=value1", JSON.stringify(requestBody), {
                headers: {"Authorization": testToken}
            });
            expect(result).toEqual(responseData);
        });
    });

    describe("PATCH method", () => {
        it("should send a PATCH request with the correct body and parameters", async () => {
            const endpoint = "/test/{id}";
            const pathVariables = ["123"];
            const queryParams: UrlParameter[] = [{paramName: "param1", paramValue: "value1"}];
            const requestBody = {key: "patchedValue"};
            const responseData = {data: "response"};

            mockedAxios.patch.mockResolvedValueOnce({data: responseData});

            const result = await client.PATCH(endpoint, requestBody, testToken, pathVariables, queryParams);

            expect(mockedAxios.patch).toHaveBeenCalledWith("/test/123?param1=value1", JSON.stringify(requestBody), {
                headers: {"Authorization": testToken}
            });
            expect(result).toEqual(responseData);
        });
    });

    describe("DELETE method", () => {
        it("should send a DELETE request with correct parameters", async () => {
            const endpoint = "/test/{id}";
            const pathVariables = ["123"];
            const queryParams: UrlParameter[] = [{paramName: "param1", paramValue: "value1"}];
            const responseData = {data: "response"};

            mockedAxios.delete.mockResolvedValueOnce({data: responseData});

            const result = await client.DELETE(endpoint, testToken, pathVariables, queryParams);

            expect(mockedAxios.delete).toHaveBeenCalledWith("/test/123?param1=value1", {
                headers: {"Authorization": testToken}
            });
            expect(result).toEqual(responseData);
        });
    });
});
