using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;

namespace EmailValidation.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ValidateEmailRegularExpression()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        [HttpGet]
        public ActionResult ValidateEmailBackEnd()
        {
            return View();
        }
        [HttpPost]
        public ActionResult ValidateEmailBackEnd(string email)
        {
            

            if (ValidateEmailAddress(email) == true)
            {
                ViewBag.status = "True";
                ViewBag.Message = "Successful Validate email";
            }
            else
            {
                ViewBag.status = "False";
                ViewBag.Message = "Invalid email address!";
            }
            return View();
        }

        public bool ValidateEmailAddress(string email)
        {
            int countAt = email.ToCharArray().Count(a => a == '@');
            if (countAt > 1 || countAt == 0)
                return false;

            var emailParts = email.Split('@');
            if(emailParts[0].Length < 2 || emailParts[1].Length < 4 || emailParts[1].IndexOf('.') == -1)
                return false;
         
            char[] charcters= email.ToCharArray();
            if(CheckChr(charcters[0]) == false)
                return false;

            //check for allowed characters
             //foreach(char ch in charcters)
             // {
             //   if(AllowedCharacters(ch) == false)
             //       return false;
             // }
               //check for double accurance of _,.,-
             for(int i=0;i< email.Length; i++)
             {
                if (AllowedCharacters(charcters[i]) == false)
                    return false;
                if (email.Length > i + 1)
                {
                    if (!CheckChr(charcters[i]) && !CheckChr(charcters[i + 1]))
                        return false;
                }
             }
           
            int length = emailParts[1].Length;
            int lastIndex = emailParts[1].LastIndexOf('.');
            if(length - lastIndex <= 2)
                return false;
            //check for domain is not digit
            char[] chars = emailParts[1].ToCharArray();
            for (int j= lastIndex+1; j< length; j++)
            {
                if (!char.IsLetter(chars[j]))
                    return false;
            }
            return true;
        }
        public bool CheckChr(char chr)
        {
           if (char.IsLetter(chr))
                return true;
            else if (char.IsDigit(chr))
                return true;
            else
                return false;
        }
        public bool AllowedCharacters(char chr)
        {
            if (chr == '@' || chr == '-' || chr == '_' || chr == '.')
                return true;
            else if (char.IsLetter(chr))
                return true;
            else if (char.IsDigit(chr))
                return true;
            else
                return false;
        }
    }
}