import o from"js-cookie";const n=(i,t,e)=>e.map(r=>`${t}[]=${r}`).join("&"),u=(i,t)=>{let a=Object.keys(t).map(r=>{const s=t[r];return s&&s.length?Array.isArray(s)?n(t,r,s):`${r}=${t[r]}`:s?`${r}=${t[r]}`:""}).filter(r=>r.length).filter(r=>r).join("&");return a?i+"?"+a:i};class h{authStatusCodes=[401];authErrorURLs=["/auth/login","/auth/reset-password","/auth/forgot-password"];_fetchType;constructor(t="json"){this._fetchType=t}configureAuthorization(t){let e="Bearer ";e+=o.get("token"),t.headers.Authorization=e}setHeader(t){t.headers={}}setDefaultHeaders(t){t.headers={"Content-Type":"application/json"}}checkToLogOutOrNot(t){return this.authErrorURLs.some(e=>t.includes(e))}isAuthRequest(t){return this.authErrorURLs.includes(t)}async hit(...t){let[e,a]=t;this.setDefaultHeaders(a),this.isAuthRequest(e)||this.configureAuthorization(a);let r="https://dev-api.esigns.io/v1.0"+e;const s=await fetch(r,a);return s?.status==200||s?.status==201?this._fetchType=="response"?{success:!0,status:s.status,data:s}:{success:!0,status:s.status,data:await s.json()}:this.authStatusCodes.includes(s.status)&&!this.checkToLogOutOrNot(e)?(setTimeout(()=>{o.remove("token"),window.location.href="/"},1e3),{success:!1,status:s.status,data:await s.json()}):{status:s?.status,success:!1,data:await s.json()}}async post(t,e){return await this.hit(t,{method:"POST",body:e?JSON.stringify(e):void 0})}async postFormData(t,e){return await this.hit(t,{method:"POST",body:e})}async get(t,e={}){return Object.keys(e).length&&(t=u(t,e)),await this.hit(t,{method:"GET"})}async delete(t,e={}){return this.hit(t,{method:"DELETE",body:JSON.stringify(e)})}async deleteWithOutPayload(t){return this.hit(t,{method:"DELETE"})}async put(t,e={}){return this.hit(t,{method:"PUT",body:JSON.stringify(e)})}async patch(t,e={}){return this.hit(t,{method:"PATCH",body:JSON.stringify(e)})}}const d=new h;export{d as $};
