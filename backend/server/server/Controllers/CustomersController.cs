//using Microsoft.AspNetCore.Mvc;
//using BL.Models;
//using BL.Api;
//using Azure.Core;

//namespace server.Controllers
//{
//    [Route("/api/[controller]")]
//    [ApiController]
//    public class CustomersController : ControllerBase
//    {
//        IBlCustomers customers; 

//        #region c-tor
//        public CustomersController(IBl manager)
//        {
//          customers =manager.blCustomers;
//        }
//        #endregion

//        #region GetById
//        [HttpGet("GetCustomerById/{id}")]

//        public BlCustomer GetById(int id)
//        {
//            return customers.GetById(id);
//        }
//        #endregion

//        #region GetCodeByPasswordAndName
//        [HttpGet("GetCodeByPasswordAndName/{name}/{password}")]

//        public int GetCodeByPasswordAndName(string name, string password)
//        {
//            return customers.GetCodeByPasswordAndName(name, password);

//        }
//        #endregion

//        #region GetCustomerByPasswordAndName
//        [HttpGet("GetCustomerByPasswordAndName/{name}/{password}")]

//        public BlCustomer GetCustomerByPasswordAndName(string name, string password)
//        {
//            return customers.GetCustomerByPasswordAndName(name, password);

//        }
//        #endregion

//        #region GetFavoriteProperties
//        [HttpGet("GetFavoriteProperties/{customerCode}")]
//        public List<BlPropertyForSale> GetFavoriteProperties(int customerCode)
//        {
//            return customers.GetFavoriteProperties(customerCode);
//        }


//        #endregion

//        #region AddNewCustomer
//        [HttpPost("AddCustomer")]

//        public IActionResult AddCustomer(BlCustomer c)
//        {
//            try
//            {
//                return Ok(customers.Create(c).Result);
//            }
//            catch (UnValidDetailsException e)
//            {
//                return Ok(e.Message);
//            }

//        }
//        #endregion

//        #region AddPropertyToFavoriteListByCustomerCodeAndPropertyCode
//        [HttpPost("AddPropertyToFavoriteListByCustomerCodeAndPropertyCode/{customerCode}/{propertyCode}")]
//        public IActionResult AddPropertyToFavoriteList(int customerCode, int propertyCode)
//        {
//            try { 
//           return Ok(customers.AddPropertyToFavoriteList(customerCode,propertyCode).Result);}

//            catch (InvalidOperationException e)
//            {
//                return BadRequest(e.Message);
//            }
//            catch (Exception e)
//            {

//                return StatusCode(500, "An error occurred while processing your request.");
//            }
//        }
//        #endregion

//        #region RemovePropertyFromFavoriteListByCustomerCodeAndPropertyCode
//        [HttpDelete("RemovePropertyFromFavoriteListByCustomerCodeAndPropertyCode/{customerCode}/{propertyCode}")]
//        public List<BlPropertyForSale> RemovePropertyFromFavoriteList(int customerCode, int propertyCode)
//        {
//           return customers.RemovePropertyFromFavoriteList(customerCode, propertyCode).Result;
//        }
//        #endregion

//    }
//}
using Microsoft.AspNetCore.Mvc;
using BL.Models;
using BL.Api;
using System;
using System.Collections.Generic;

namespace server.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly IBlCustomers customers;

        #region c-tor
        public CustomersController(IBl manager)
        {
            customers = manager.blCustomers;
        }
        #endregion

        #region GetById
        [HttpGet("GetCustomerById/{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                var customer = customers.GetById(id);
                if (customer == null)
                {
                    return NotFound($"Customer with ID {id} not found");
                }
                return Ok(customer);
            }
            catch (Exception ex)
            {
                // כדאי להוסיף לוג כאן
                return StatusCode(500, "An error occurred while retrieving the customer");
            }
        }
        #endregion

        #region GetCodeByPasswordAndName
        [HttpGet("GetCodeByPasswordAndName/{name}/{password}")]
        public IActionResult GetCodeByPasswordAndName(string name, string password)
        {
            try
            {
                var code = customers.GetCodeByPasswordAndName(name, password);
                //if (code <= 0)
                //{
                //    return NotFound("Invalid username or password");
                //}
                return Ok(code);
            }
            catch (Exception ex)
            {
              
                return StatusCode(500, "An error occurred while authenticating");
            }
        }
        #endregion

        #region GetCustomerByPasswordAndName
        [HttpGet("GetCustomerByPasswordAndName/{name}/{password}")]
        public IActionResult GetCustomerByPasswordAndName(string name, string password)
        {
            try
            {
                var customer = customers.GetCustomerByPasswordAndName(name, password);
                //if (customer == null)
                //{
                //    return NotFound("Invalid username or password");
                //}
                return Ok(customer);
            }
            catch (Exception ex)
            {
                // כדאי להוסיף לוג כאן
                return StatusCode(500, "An error occurred while retrieving customer information");
            }
        }
        #endregion

        #region GetFavoriteProperties
        [HttpGet("GetFavoriteProperties/{customerCode}")]
        public IActionResult GetFavoriteProperties(int customerCode)
        {
            try
            {
                var properties = customers.GetFavoriteProperties(customerCode);
                return Ok(properties);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound($"Customer with code {customerCode} not found");
            }
            catch (Exception ex)
            {
                // כדאי להוסיף לוג כאן
                return StatusCode(500, "An error occurred while retrieving favorite properties");
            }
        }
        #endregion

        #region AddNewCustomer
        [HttpPost("AddCustomer")]
        public IActionResult AddCustomer(BlCustomer c)
        {
            try
            {
                var result = customers.Create(c).Result;
                return Ok(result);
            }
            catch (UnValidDetailsException e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception ex)
            {
                // כדאי להוסיף לוג כאן
                return StatusCode(500, "An error occurred while creating the customer");
            }
        }
        #endregion

        #region AddPropertyToFavoriteListByCustomerCodeAndPropertyCode
        [HttpPost("AddPropertyToFavoriteListByCustomerCodeAndPropertyCode/{customerCode}/{propertyCode}")]
        public IActionResult AddPropertyToFavoriteList(int customerCode, int propertyCode)
        {
            try
            {
                var result = customers.AddPropertyToFavoriteList(customerCode, propertyCode).Result;
                return Ok(result);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (InvalidOperationException e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception e)
            {
                // כדאי להוסיף לוג כאן
                return StatusCode(500, "An error occurred while adding property to favorites");
            }
        }
        #endregion

        #region RemovePropertyFromFavoriteListByCustomerCodeAndPropertyCode
        [HttpDelete("RemovePropertyFromFavoriteListByCustomerCodeAndPropertyCode/{customerCode}/{propertyCode}")]
        public IActionResult RemovePropertyFromFavoriteList(int customerCode, int propertyCode)
        {
            try
            {
                var result = customers.RemovePropertyFromFavoriteList(customerCode, propertyCode).Result;
                return Ok(result);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                // כדאי להוסיף לוג כאן
                return StatusCode(500, "An error occurred while removing property from favorites");
            }
        }
        #endregion
    }
}
