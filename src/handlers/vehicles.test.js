import status from 'http-status';
import * as vehiclesHandler from './vehicles';

test('should retrieve vehicles via get method', async () => {
    const ctx = {
        params: {
            modelYear: 2018,
            manufacturer: 'Vehicles',
            model: 'A10',
        },
        state: {
            vehiclesService: {
                getVehicles: jest.fn().mockResolvedValue({
                    Count: 1,
                    Results: [
                        {
                            Description: '2015 Vehicle',
                            VehicleId: 1001,
                        },
                    ],
                }),
            },
        },
    };
    await vehiclesHandler.getVehicles(ctx);
    expect(ctx.status).toBe(status.OK);
    expect(ctx.body.Count).toBe(1);
});

test('should retrieve vehicles via post method', async () => {
    const ctx = {
        request: {
            body: {
                modelYear: 2018,
                manufacturer: 'Vehicles',
                model: 'A10',
            },
        },
        state: {
            vehiclesService: {
                postVehicles: jest.fn().mockResolvedValue({
                    Count: 1,
                    Results: [
                        {
                            Description: '2015 Vehicle',
                            VehicleId: 1001,
                        },
                    ],
                }),
            },
        },
    };
    await vehiclesHandler.postVehicles(ctx);
    expect(ctx.status).toBe(status.CREATED);
    expect(ctx.body.Count).toBe(1);
});
