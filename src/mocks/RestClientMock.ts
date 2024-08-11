export class MockRestClient {
    GET = jest.fn().mockResolvedValue([]);
    POST = jest.fn().mockResolvedValue({});
    DELETE = jest.fn().mockResolvedValue(null);
}