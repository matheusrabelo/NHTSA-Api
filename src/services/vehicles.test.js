import * as vehiclesService from './vehicles';

jest.mock('axios', () => ({
    get: jest.fn().mockResolvedValue({
        data: {
            Count: 1,
            Message: 'Results returned successfully',
            Results: [
                {
                    VehicleDescription: '2018 Vehicle',
                    VehicleId: 1001,
                },
            ],
        },
    }),
    post: jest.fn().mockResolvedValue({
        data: {
            Count: 1,
            Message: 'Results returned successfully',
            Results: [
                {
                    VehicleDescription: '2018 Vehicle',
                    VehicleId: 1001,
                },
            ],
        },
    }),
}));

test('should retrieve vehicles', async () => {
    const vehicles = await vehiclesService
        .getVehicles({ modelYear: 2018, manufacturer: 'Vehicles', model: 'A10' });
    expect(vehicles.Count).toBe(1);
    expect(Array.isArray(vehicles.Results)).toBe(true);
    expect(vehicles.Results[0].Description).toBe('2018 Vehicle');
});

test('should add vehicles', async () => {
    const vehicles = await vehiclesService
        .postVehicles({ modelYear: 2018, manufacturer: 'Vehicles', model: 'A10' });
    expect(vehicles.Count).toBe(1);
    expect(Array.isArray(vehicles.Results)).toBe(true);
    expect(vehicles.Results[0].Description).toBe('2018 Vehicle');
});
