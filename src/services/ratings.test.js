import * as ratingsService from './ratings';

jest.mock('axios', () => ({
    get: jest.fn().mockResolvedValue({
        data: {
            Count: 1,
            Message: 'Results returned successfully',
            Results: [
                {
                    VehiclePicture: 'vehicle.png',
                    OverallRating: '5',
                },
            ],
        },
    }),
}));

test('should retrieve ratings', async () => {
    const rating = await ratingsService
        .getCrashRating({ vehicleId: 1001 });
    expect(rating).toBe('5');
});
