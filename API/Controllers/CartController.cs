using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class CartController : BaseApiController
    {
        private readonly ICartRepository _cartRepository;

        public CartController(ICartRepository cartRepository)
        {
            _cartRepository = cartRepository;
        }
        [HttpGet]
        public async Task<ActionResult<ClientCart>> GetCartById(string id)
        {
            var basket = await _cartRepository.GetCartAsync(id);

            return Ok(basket ?? new ClientCart(id));
        }

        [HttpPost]
        public async Task<ActionResult<ClientCart>> UpdateCart(ClientCart cart)
        {
            var updatedBasket = await _cartRepository.UpdateCartAsync(cart);

            return Ok(updatedBasket);
        }
        
        [HttpDelete]
        public async Task DeleteCartAsync(string id)
        {
            await _cartRepository.DeleteCartAsync(id);
        }
    }
}