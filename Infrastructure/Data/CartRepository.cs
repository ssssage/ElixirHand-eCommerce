using Core.Entities;
using Core.Interfaces;
using StackExchange.Redis;
using System;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class CartRepository : ICartRepository
    {
        private readonly IDatabase _database;

        public CartRepository(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }
        public async Task<bool> DeleteCartAsync(string cartId)
        {
            return await _database.KeyDeleteAsync(cartId);
        }

        public async Task<ClientCart> GetCartAsync(string cartId)
        {
            var data = await _database.StringGetAsync(cartId);

            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<ClientCart>(data);
        }

        public async Task<ClientCart> UpdateCartAsync(ClientCart clientCart)
        {
            var created = await _database.StringSetAsync(clientCart.Id,
               JsonSerializer.Serialize(clientCart), TimeSpan.FromDays(2));

            if (!created) return null;

            return await GetCartAsync(clientCart.Id);
        }
    }
}
