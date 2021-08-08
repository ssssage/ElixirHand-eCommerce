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
        private readonly IMapper _mapper;

        public CartController(ICartRepository cartRepository, IMapper mapper)
        {
            _mapper = mapper;
            _cartRepository = cartRepository;
        }
        [HttpGet]
        public async Task<ActionResult<ClientCart>> GetCartById(string id)
        {
            var basket = await _cartRepository.GetCartAsync(id);

            return Ok(basket ?? new ClientCart(id));
        }

        [HttpPost]
        public async Task<ActionResult<ClientCart>> UpdateCart(ClientCartDto cart)
        {
            var clientCart = _mapper.Map<ClientCartDto, ClientCart>(cart);
            var updatedCart = await _cartRepository.UpdateCartAsync(clientCart);

            return Ok(updatedCart);
        }
        
        [HttpDelete]
        public async Task DeleteCartAsync(string id)
        {
            await _cartRepository.DeleteCartAsync(id);
        }
    }
}