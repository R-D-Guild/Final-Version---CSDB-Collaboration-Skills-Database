var e=globalThis,t={},r={},s=e.parcelRequire3d38;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var s=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequire3d38=s),s.register;var a=s("iAutD");const n=document.getElementById("forgotPassFormDetails"),o=document.getElementById("forgotPassEmail"),i=document.getElementById("forgotPassErrorMessage"),l=document.getElementById("confirmationPopup"),d=document.getElementById("closePopup"),c=()=>{l.style.display="none"},u=e=>{i.textContent=e,i.classList.add("alert","shake"),i.style.display="block",setTimeout(()=>{i.style.display="none",i.classList.remove("shake")},5e3)},m=()=>{i.style.display="none",i.classList.remove("shake")},p=()=>{"undefined"!=typeof hcaptcha&&hcaptcha.reset()},y=async e=>{let{data:t,error:r}=await (0,a.supabase).from("auth.users").select("email").eq("email",e).single();return t};n.addEventListener("submit",async e=>{e.preventDefault();let t=o.value.trim(),r=hcaptcha.getResponse();if(m(),!t){u("Please enter your email.");return}if(!r){u("Please complete the CAPTCHA.");return}try{if(!await y(t)){u("This email does not exist in our system."),p();return}let{error:e}=await (0,a.supabase).auth.resetPasswordForEmail(t,{captchaToken:r});if(e){u("Error sending reset link: "+e.message),p();return}l.style.display="flex"}catch(e){u("Something went wrong. Please try again later."),p()}}),d.addEventListener("click",()=>{c(),setTimeout(()=>{window.location.href="/reset-password.html"},5e3)});
//# sourceMappingURL=forgotPass.8497dfa2.js.map
