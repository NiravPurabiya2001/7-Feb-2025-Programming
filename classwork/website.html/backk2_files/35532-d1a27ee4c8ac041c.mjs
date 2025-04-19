"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[35532,84772],{767881:(s,e,a)=>{a.d(e,{Fe:()=>t,bO:()=>n,eQ:()=>r,s4:()=>i});let t={BUSINESS_HIERARCHY_CHILD:"BUSINESS_HIERARCHY_CHILD",BUSINESS_HIERARCHY_MEMBER:"BUSINESS_HIERARCHY_MEMBER"},r={business_relationship_invite:"business_relationship"},i={PARTNER_REQUEST:"PARTNER_REQUEST",MEMBER_INVITE:"MEMBER_INVITE",PARTNER_INVITE:"PARTNER_INVITE",ORGANIZATION_MANAGER_INVITE:"ORGANIZATION_MANAGER_INVITE"},n=s=>0===s?"DIRECT_PERMISSION":"AGGREGATED_PERMISSION"},793273:(s,e,a)=>{a.d(e,{D:()=>c,p:()=>r});var t=a(909015);let r=(s,e=!1,a,r=!1,i=!1,n=[])=>{let d=s.includes("OWNER")||s.includes("ADMIN")||s.some(s=>n.includes(s)),_=[],c=i?t.hd:t.j$;if(e&&_.push("NO_ACCESS"),"NO_ACCESS"!==s[0]){if(d)"PROFILE"===a?_.push(...t.Hg):"AD_ACCOUNT"===a?_.push(...r?t.cZ:c):"CATALOG"===a&&_.push(...t.pk);else if("PROFILE"===a)_.push(...t.Hg);else if("CATALOG"===a)_.push(...s);else if("AD_ACCOUNT"===a){let a=s.filter(s=>(r?t.cZ.includes(s):c.includes(s))||e&&"NO_ACCESS"===s);0===a.length?_.push("ANALYST"):_.push(...a)}}return _},i=["ANALYST","FINANCE_MANAGER","AUDIENCE_MANAGER","CAMPAIGN_MANAGER","CATALOGS_MANAGER"],n=["ANALYST","FINANCE_MANAGER","AUDIENCE_MANAGER","CAMPAIGN_MANAGER"],d=s=>s.includes("ADMIN"),_=s=>s.includes("NO_ACCESS"),c=({permission:s,selectedPermissions:e,assetType:a,inCatalogManagment:t,inFinanceRoleMigration:r})=>{let c=t?n:i;if(r&&(c=c.map(s=>"FINANCE_MANAGER"===s?"FINANCE_EDIT":s)),"CATALOG"===a)return[s];if("ADMIN"===s)return d(e)?[]:["ADMIN",...c];if("NO_ACCESS"===s)return _(e)?[]:["NO_ACCESS"];if(e.includes(s))return c.includes(s)&&e.includes("ADMIN")?c.filter(e=>e!==s):e.filter(e=>e!==s);let u=[...e.filter(s=>"NO_ACCESS"!==s),s];return 0===c.filter(s=>!u.includes(s)).length?["ADMIN",...u]:u}},106032:(s,e,a)=>{a.d(e,{$2:()=>d,Ah:()=>u,IW:()=>n,KH:()=>_,NN:()=>p,Vs:()=>o,dF:()=>l,sl:()=>c});var t=a(909015),r=a(466956),i=a(724409);let n=(s={},e={})=>{if(s.limit||s.sortBy||s.sortDirection||s.searchTerm)return 0;if(s.page){let a=s.limit||e.limit;return((s.page||e.page)-1)*a}return e.startIndex||0},d=(s={},e)=>{if(s.limit||s.sortBy||s.sortDirection||s.searchTerm)return 0;if(s.page){let a=s.limit||e.limit;return((s.page||e.page)-1)*a}return e.startIndex},_=(s={},e)=>{if(Number.isInteger(s.page)){let a=s.limit||e?.limit||10;return((s.page||e?.page||1)-1)*a}return e?.startIndex||0},c=(s,e,a,t)=>{let{businessId:r,...i}=a,{...n}=t;return{id:s,...n,...i,searchBy:i.searchBy,searchTerm:i.searchTerm||n.searchTerm,limit:i.limit||n.limit,page:i.page||n.page,sortBy:i.sortBy||n.sortBy,sortDirection:i.sortDirection||n.sortDirection,startIndex:e,...0===e&&{page:1}}},u=(s,e)=>{let a=e.reduce((e,a)=>(e.ids.add(s(a)),{...e,data:{...e.data,[s(a)]:a}}),{ids:new Set,data:{}});return{...a,ids:Array.from(a.ids)}},o=(s,e)=>{let a={page:s.page??e.page,limit:s.limit??e.limit,sortBy:s.sortBy??e.sortBy,searchBy:s.searchBy,searchTerm:s.searchTerm??e.searchTerm,sortDirection:s.sortDirection??e.sortDirection},t=n(s,e);return{...a,startIndex:t,...0===t&&{page:1}}},l=async(s,e,a,n)=>{let d="PEOPLE"===a?i.JC:r.Eg,{data:{data:_=[],total_data_count:c}={}}=n?await n({limit:t.xX,startIndex:0})||{}:await d({...s,limit:t.xX,startIndex:0,id:s?.id||""}),u=Math.ceil(c/t.xX);if(u<=1)return{data:{data:_,total_data_count:c}};let o=[...Array(u).keys()].slice(1);return{data:{data:(await Promise.allSettled(o.map(e=>n?n({limit:t.xX,startIndex:e*t.xX}):d({...s,limit:t.xX,startIndex:e*t.xX,id:s?.id||""})))).reduce((s,e)=>(e.value?.data?.data&&(s=s.concat(e.value.data.data)),s),_),total_data_count:c}}};async function p(s,e,a){let t=Math.ceil(e.length/s),r=[];for(let i=0;i<t;i+=1){let t=i*s,n=(i+1)*s;r.push(a(e.slice(t,n)))}return await Promise.all(r)}},668868:(s,e,a)=>{a.d(e,{BG:()=>f,Br:()=>b,EB:()=>l,G2:()=>D,GS:()=>L,JE:()=>Z,N1:()=>g,NZ:()=>T,Ns:()=>M,Oi:()=>P,Tm:()=>U,Vh:()=>v,W3:()=>h,Yg:()=>J,_A:()=>F,cE:()=>R,cR:()=>I,cp:()=>C,eo:()=>$,fc:()=>G,ib:()=>m,jk:()=>w,l_:()=>X,lo:()=>x,oC:()=>p,oR:()=>E,ot:()=>N,pI:()=>S,xD:()=>V,xZ:()=>A});var t=a(481630),r=a(909015),i=a(400416),n=a(793273),d=a(106032),_=a(725890),c=a(466956),u=a(724409),o=a(136770);let l=async(s,e,a,t,r,i,n)=>"PARTNER"===r?await (0,c.SZ)({businessId:t,partnerId:s,assetId:a,permissions:e,clientBusinessId:i,businessHierarchyNodeId:n}):await (0,u.Jg)({businessId:t,memberId:s,assetId:a,permissions:e,businessHierarchyNodeId:n}),p=async(s,e,a,t)=>{if(0===e.length)return;let r=[];e.forEach(({assigneeIds:e,adAccountIds:i,permissions:n})=>{0!==n.length&&e.forEach(e=>{i.forEach(i=>{r.push(l(e,n,i,s,a,void 0,t))})})}),await Promise.all(r)},E=async(s,e,a,t,r,n)=>{let d=Object.entries(a||{}).reduce((s,[e,a])=>{let t=a.includes("ADMIN")?["ADMIN"]:a;return{...s,[e]:t}},{}),_={...(t?.length||0)>0?{ad_account_permissions:t}:{},...(r?.length||0)>0?{catalog_permissions:r}:{},...(n?.length||0)>0?{profile_permissions:n}:{}},c={resource_id_to_roles:JSON.stringify(d),...Object.keys(_).length>0?{all_assets:_}:{}};return(await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/members/${e}/assets/access/`,method:"PUT",data:c})).resource_response},m=async(s,e,a,t,r,n,d,_)=>{let c=Object.entries(e).reduce((s,[e,a])=>{let t=a.includes("ADMIN")?["ADMIN"]:a;return 0===t.length?{...s}:{...s,[e]:t}},{}),u={};(n?.length||0)>0&&(u={...u,ad_account_permissions:n}),(d?.length||0)>0&&(u={...u,catalog_permissions:d}),(_?.length||0)>0&&(u={...u,profile_permissions:_});let o={resource_id_to_roles:JSON.stringify(c),invite_type:"PEOPLE"===t?"MEMBER_INVITE":"PARTNER_INVITE",business_hierarchy_node_id:r};Object.keys(u).length>0&&(o={...o,all_assets:u});let l=a.map(e=>(0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/assets/access/`,method:"POST",data:o}));await Promise.all(l)},y=s=>s.reduce((s,e)=>{let a=Object.keys(e)[0],t=Object.values(e)[0].includes("ADMIN")?{[a]:["ADMIN"]}:e;return{...s,...t}},{}),b=async(s,e,a)=>{let t=y(a);return(await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/partners/${e}/assets/access/`,method:"POST",data:{resource_id_to_roles:t}})).resource_response.data},N=async(s,e,a,t)=>{let r=e.reduce((s,e)=>{let a=Object.keys(e)[0],t=Object.values(e)[0].includes("ADMIN")?{[a]:["ADMIN"]}:e;return{...s,...t}},{});return(await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${a}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(r),invite_type:"PARTNER_REQUEST",business_hierarchy_node_id:t}})).resource_response},A=async s=>(s?await (0,i.Z)({url:"ads/v4/advertisers/countries/",method:"GET",data:{business_id:s}}):await (0,i.Z)({url:"ads/v4/advertisers/countries/",method:"GET"})).resource_response.data,h=async(s,e,a,r,n,d,_,c)=>(await (0,i.Z)({url:"/ads/v4/advertisers/",method:"POST",data:{owner_user_id:s,name:r,country:n,currency:d,business_hierarchy_node_id:a,skip_reseller:c,tos_id:_||(0,o.Fc)(t.tN[n]??0),...e&&{agency_user_id:e}}})).resource_response.data,I=async()=>{let s=await (0,i.Z)({url:"/ads/v4/business_access/businesses/me/employers/"}),e=s.resource_response.data?.data;return await Promise.all(e||[])},v=async({businessId:s,assetId:e,limit:a,sortBy:t="name",searchBy:n="name",searchTerm:d,startIndex:_,sortDirection:c,resourceType:u,permissions:o,assetOwnerBusinessIds:l,assetGroupId:p,countries:E,ignoreAssetIds:m})=>{let y={};(o?.length||0)>0&&(y={...y,permissions:o}),(l?.length||0)>0&&(y={...y,asset_owner_business_ids:l}),e&&(y={...y,child_asset_id:e}),p&&(y={...y,asset_group_id:p}),E&&(y={...y,countries:E}),m&&(y={...y,ignore_asset_ids:m});let b=a&&a<r.xX?a:r.xX;return(await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/assets/`,data:{page_size:b,sort_by:t,search_by:n,start_index:_,search_value:d,sort_ascending:"ASCENDING"===c,resource_type:u,filters:y?JSON.stringify(y):void 0}})).resource_response},T=async(s,e,a,t,r=!1)=>{let i=s.resourceType;return Array.from(new Set((await (0,d.dF)(void 0,a,void 0,({limit:e,startIndex:a})=>v({...s,id:s.businessId,startIndex:a,limit:e}))).data.data.filter(({permissions:s})=>(0,n.p)(s,!1,i,t,r).includes(e)).map(({asset_id:s})=>s)))},S=async({businessId:s,assetIds:e,resourceType:a,limit:t,sortBy:n="name",sortDirection:_="ASCENDING",searchBy:c,searchTerm:u="",startIndex:o=0,filtersPayload:l})=>{let p=t||Math.min(r.xX,e.length||1),E=l&&Object.keys(l).length>0?{filters:JSON.stringify(l)}:{};if(!(e.length>=r.GM))return(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets_by_ids`,data:{asset_ids:e,resource_type:a,page_size:p,sort_by:n,sort_ascending:"ASCENDING"===_,search_by:c,search_value:u,start_index:o,...E}})).resource_response;let m=(await (0,d.NN)(r.GM,e,async e=>(0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets_by_ids`,data:{asset_ids:e,resource_type:a,page_size:r.GM,search_by:c,search_value:u,start_index:0,...E}}))).reduce((s,e)=>({...s,...e.resource_response,data:{...s.data,...e.resource_response.data,data:{...s.data.data,...e.resource_response.data?.data},total_data_count:s.data.total_data_count+(e.resource_response.data?.total_data_count||0)}}),{data:{data:{},total_data_count:0}}),y=[...e];y.sort((s,e)=>"ASCENDING"===_?m.data.data[s]?.asset.name.localeCompare(m.data.data[e]?.asset.name):m.data.data[e]?.asset.name.localeCompare(m.data.data[s]?.asset.name));let b=y.slice(o,o+p).reduce((s,e)=>({...s,[e]:m.data.data[e]}),{});return{...m,data:{...m.data,data:b}}},R=async({id:s,limit:e,sortBy:a="name",searchBy:t="name",searchTerm:r="",startIndex:i=0,sortDirection:n="ASCENDING",forPartner:d=!1,includeAssetSummary:_=!1,countries:c,assetOwnerBusinessIds:u,ignoreAssetIds:o})=>{let l=await v({id:s,businessId:s,limit:e,sortBy:a,searchBy:t,searchTerm:r,startIndex:i,sortDirection:n,resourceType:"AD_ACCOUNT",permissions:d?["OWNER"]:void 0,countries:c,assetOwnerBusinessIds:u,ignoreAssetIds:o});if(!_)return l;{let a=await S({businessId:s,assetIds:l?.data.data.map(s=>s.asset_id)||[],limit:e,resourceType:"AD_ACCOUNT"}),t=l?.data.data.map(s=>a?.data.data[s.asset_id]?{...s,...a.data.data[s.asset_id]}:null).filter(s=>!!s);return{...l,data:{...l?.data,data:t}}}},w=async({id:s,limit:e,sortBy:a="name",searchBy:t="name",searchTerm:r="",startIndex:i=0,sortDirection:n="ASCENDING",includeAssetSummary:d=!1})=>{let _=await v({id:s,businessId:s,limit:e,sortBy:a,searchBy:t,searchTerm:r,startIndex:i,sortDirection:n,resourceType:"CATALOG"});if(!d)return _;{let a=await S({businessId:s,assetIds:_?.data.data.map(s=>s.asset_id)||[],limit:e,resourceType:"CATALOG"}),t=_?.data.data.map(s=>a?.data.data[s.asset_id]?{...s,...a.data.data[s.asset_id]}:null).filter(s=>!!s);return{..._,data:{..._?.data,data:t}}}},C=async({id:s,limit:e,sortBy:a="name",sortDirection:t="ASCENDING",searchBy:r="name",searchTerm:i="",startIndex:n=0,countries:d,assetOwnerBusinessIds:_,ignoreAssetIds:c})=>v({id:s,businessId:s,limit:e,sortBy:a,searchBy:r,searchTerm:i,startIndex:n,sortDirection:t,resourceType:"PROFILE",countries:d,assetOwnerBusinessIds:_,ignoreAssetIds:c}),$=async({id:s,assetIds:e,type:a})=>await S({businessId:s,resourceType:r.ww[a],assetIds:e}),D=async({businessId:s,assetId:e,resourceType:a="AD_ACCOUNT",includeAssetSummary:t=!1})=>{let r=await v({id:s,businessId:s,searchBy:"id",searchTerm:e,assetId:e,resourceType:a});if(!t)return{...r,data:{...r?.data,data:r?.data?.data[0]}};{let e=await S({businessId:s,assetIds:r?.data.data.map(s=>s.asset_id)||[],limit:1,resourceType:a}),t=r?.data.data.map(s=>({...s,...e?.data.data[s.asset_id]}));return{...r,data:{...r?.data,data:t?.[0]}}}},g=async({businessId:s,assetId:e,limit:a,sortBy:t,searchBy:n,searchTerm:d,startIndex:_,sortDirection:c})=>{let u=a&&a<r.xX?a:r.xX;return(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/partners/`,data:{page_size:u,sort_by:t,search_by:n||"FULL_NAME",start_index:_,search_value:d,sort_ascending:"ASCENDING"===c}})).resource_response},O=async(s=0,e=10)=>{let a=[];for(let t=s;t<s+e&&t<30;t++)a.push({id:t.toString(),permissions:[],user:{email:"john_doe@email.com",full_name:`John Doe ${t}`,id:t,image_medium_url:"https://via.placeholder.com/150",image_small_url:"https://via.placeholder.com/300"}});return Promise.resolve({resource_response:{data:{data:a,total_data_count:30}}})},f=async({businessId:s,assetId:e,limit:a,sortBy:t,searchBy:n,searchTerm:d,startIndex:_,sortDirection:c,fetchSystemUsers:u=!1})=>{let o=a&&a<r.xX?a:r.xX;return(u?await O(_,o):await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/members/`,data:{page_size:o,sort_by:t,search_by:n||"FULL_NAME",start_index:_,search_value:d,sort_ascending:"ASCENDING"===c,fetch_system_users:u}})).resource_response},G=async({id:s,businessId:e,assetId:a,limit:t,sortBy:r="name",searchBy:i="name",searchTerm:n,startIndex:d,sortDirection:_,resourceType:c="ASSET_GROUP"})=>v({id:s,businessId:e,assetId:a,limit:t,sortBy:r,searchBy:i,searchTerm:n,startIndex:d,sortDirection:_,resourceType:c}),x=async({id:s,businessId:e,limit:a,sortBy:t="name",searchBy:r="name",searchTerm:i,startIndex:n,sortDirection:d,resourceType:_="ASSET_GROUP"})=>v({id:s,businessId:e,limit:a,sortBy:t,searchBy:r,searchTerm:i,startIndex:n,sortDirection:d,resourceType:_}),Z=async(s,e)=>(await (0,i.Z)({url:`ads/v4/businesses/${s.businessId}/advertisers/metrics`,method:"POST",data:e,headers:{"api-resource-target":"sterling"}})).resource_response.data,L=async(s,e)=>(await (0,i.Z)({url:`ads/v4/business_hierarchy/${s.businessHierarchyId}/advertisers/metrics`,method:"POST",data:e})).resource_response.data,P=async(s,e,a=!1)=>{let t=(await (0,i.Z)({url:`ads/v4/advertisers/${s}/terms_of_service/`,method:"GET",data:{tos_type:e,include_html:a}})).resource_response.data;return{id:t.id,html:t.html,hasAccepted:t.has_accepted,advertiserId:t.advertiser_id}},M=async s=>(await (0,i.Z)({url:`ads/v4/advertisers/${s}/advertiser_settings`,method:"GET",data:{}})).resource_response.data,X=async({advertiser_id:s,default_utm_source_enabled:e,custom_url_parameters:a})=>(await (0,i.Z)({url:`ads/v4/advertisers/${s??""}/advertiser_settings`,method:"POST",data:{advertiser_id:s,default_utm_source_enabled:e,custom_url_parameters:a}})).resource_response.data,U=async()=>(await (0,i.Z)({url:"ads/v4/resellers/public_reseller_info"})).resource_response,B=async(s,e,a=!1)=>(await (0,i.Z)({url:`ads/v4/resellers/business/${s}/migrating_ad_accounts`,data:{advertiser_ids:e.join(","),show_migrated_advertisers:a}})).resource_response,F=async s=>{let e;let a=await U(),t=(a?.data||[]).reduce((s,e)=>({...s,[e.id]:e}),{}),r=await R({id:s,limit:100,includeAssetSummary:!0}),i=r.data?.data||[],n=[],d=await (0,_.Bc)({id:s,type:"PARTNER_INVITE",filters:{invite_status:["PENDING","EXPIRED"]}});for(let s of i)n.push(s.asset_id);let c=await B(s,n,!0),{migrating_advertisers:u,migration_state:o}=c?.data||{},l=u||[],p=t[l[0].reseller_user_id],E=i.filter(s=>l.some(e=>s.asset_id===e.advertiser_id&&e.reseller_user_id===p.id)).map(s=>({id:s.asset_id,name:s.asset.name,billingCountry:s.country})),m=(d.data.data||[]).filter(s=>s.extended_user_info.id===p.id),y="NEED_RESELLER_PARTNERSHIP";if("INVITE_REJECTED"===o)y="RESELLER_INVITE_DECLINED";else if("INVITE_ACCEPTED"===o)y="RESELLER_INVITE_ACCEPTED";else if(m.length>0){let s=m[0];e=s.id,"PENDING"===s.invite_data.invite_status?y="RESELLER_INVITE_PENDING":"EXPIRED"===s.invite_data.invite_status&&(y="RESELLER_INVITE_EXPIRED")}return{resellerMarketInfo:{resellerUserId:p.id,resellerName:p.name,status:y,inviteId:e},adAccountsToMigrate:E}},J=async({businessId:s,firstName:e,lastName:a,resellerUserId:t,email:r,businessInformation:n})=>{let d=await (0,i.Z)({url:`ads/v4/resellers/business/${s}/migration_info`,method:"POST",data:{advertiser_body:n,first_name:e,last_name:a,reseller_user_id:t,email:r}});if(d.resource_response.error)throw Error(d.resource_response.error.message_detail||d.resource_response.error.message);return d.resource_response},V=async(s,e,a)=>{let t=await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/assets/access/`,method:"POST",data:{invite_type:"PARTNER_INVITE",resource_id_to_roles:JSON.stringify(a)}});if(t.resource_response.error)throw Error(t.resource_response.error.message_detail||t.resource_response.error.message);return t.resource_response}},725890:(s,e,a)=>{a.d(e,{Bc:()=>i,ED:()=>o,KD:()=>m,Ts:()=>n,UF:()=>_,XJ:()=>u,c_:()=>c,hd:()=>p,oK:()=>A,t$:()=>d,uN:()=>N,vV:()=>l,xW:()=>y});var t=a(400416),r=a(787487);let i=async({id:s,type:e,filters:a})=>(await (0,t.Z)({url:`/ads/v4/business_access/businesses/${s}/invites_and_requests/`,data:{is_member:"MEMBER_INVITE"===e,filters:JSON.stringify({invite_type:e,...a})}})).resource_response,n=async({businessId:s,inviteOrRequestId:e,type:a})=>(await (0,t.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/`,data:{invite_type:a}})).resource_response,d=async({businessId:s,inviteIds:e,invite_type:a="MEMBER_INVITE"})=>(await (0,t.Z)({url:`/ads/v4/business_access/businesses/${s}/invites`,data:{invite_or_request_ids:e,invite_type:a}})).resource_response,_=async({businessId:s,inviteId:e,type:a})=>(await (0,t.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/`,method:"DELETE",data:{type:a}})).resource_response,c=async({businessId:s,inviteId:e,type:a})=>(await (0,t.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/`,method:"PUT",data:{invite_type:a}})).resource_response,u=async({id:s,filters:e})=>(await (0,t.Z)({url:`/ads/v4/business_access/businesses/${s}/invites_and_requests/`,data:{is_member:!1,filters:JSON.stringify({invite_type:"PARTNER_REQUEST",...e})}})).resource_response,o=async({requestId:s,role:e,resources:a,accept:i,businessId:n})=>{let d={accept:i};return e&&(d.role_name=e),a&&!(0,r.Z)(a)&&(d.resource_id_to_roles=JSON.stringify(a)),(await (0,t.Z)({url:`/ads/v4/business_access/requests/${s}/`,method:"POST",data:{...a&&!(0,r.Z)(a)&&{resource_id_to_roles:JSON.stringify(a)},accept_request:i,business_entity_id:n}})).resource_response},l=async({requestee:s,asset:e,requester:a,businessId:r})=>(await (0,t.Z)({url:"/ads/v4/business_access/request/entitlement/",method:"GET",data:{requestee_id:s,asset_id:e,requester_id:a,business_entity_id:r}})).resource_response,p=async s=>(await (0,t.Z)({url:"ads/v4/business_access/business_hierarchy_invites/unauth/",method:"GET",data:{token:s}})).resource_response,E=async(s,e)=>(0,t.Z)({url:"ads/v4/business_access/business_hierarchy_invites/unauth/",method:"PATCH",data:{token:e,action:s}}),m=async s=>E("ACCEPT",s),y=async s=>E("REJECT",s),b=async(s,e)=>(0,t.Z)({url:"/ads/v4/business_access/invites/unauth_respond/",method:"POST",data:{token:e,accept_invite:s}}),N=async s=>b(!0,s),A=async s=>b(!1,s)},466956:(s,e,a)=>{a.d(e,{Bq:()=>m,Eg:()=>o,Jq:()=>c,K7:()=>u,M9:()=>y,OA:()=>A,Of:()=>E,SB:()=>l,SZ:()=>N,UC:()=>I,Zk:()=>_,h9:()=>b,nD:()=>v,p9:()=>p,wi:()=>h});var t=a(909015),r=a(400416),i=a(787487),n=a(106032),d=a(668868);let _=async({partnerId:s,businessId:e,businessHierarchyNodeId:a})=>(await (0,r.Z)({url:`ads/v4/business_access/businesses/${e}/partners/${s}/invite/`,method:"POST",data:{invite_type:"PARTNER_INVITE",business_hierarchy_node_id:a}})).resource_response,c=async({partnerId:s,businessId:e})=>(await (0,r.Z)({url:`ads/v4/business_access/businesses/${e}/partners/${s}/invite/`,method:"POST",data:{invite_type:"PARTNER_REQUEST"}})).resource_response,u=async({businessId:s,partnerId:e,businessHierarchyNodeId:a,role:t,partner_type:i})=>(await (0,r.Z)({url:`/ads/v4/business_access/businesses/${s}/partners/${e}/`,method:"DELETE",data:{role_name:t,partner_type:i,business_hierarchy_node_id:a}})).resource_response,o=async({id:s,limit:e,sortBy:a="full_name",searchBy:n=["FULL_NAME","BUSINESS_ID","USERNAME"],searchTerm:d="",startIndex:_=0,sortDirection:c="ASCENDING",includeAssetSummary:u,partnerType:o,partners:l=[],filters:p={},includeCurrentBusiness:E})=>{let m=e&&e<t.xX?e:t.xX;return(await (0,r.Z)({url:`ads/v4/business_access/businesses/${s}/partners/`,data:{page_size:m,sort_by:a,search_by:n,start_index:_,search_value:d,assets_summary:u?"true":"false",sort_ascending:"ASCENDING"===c,partner_type:o,partner_ids:l,filters:(0,i.Z)(p)?void 0:JSON.stringify(p),include_current_business:E}})).resource_response},l=async({businessId:s,partnerId:e,limit:a,sortBy:i,searchBy:n="name",searchTerm:_,startIndex:c,sortDirection:u,includeAssetSummary:o})=>{let l=a&&a<t.xX?a:t.xX,p=await (0,r.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:l,sort_by:i,..._&&{search_by:n},start_index:c,search_value:_,sort_ascending:"ASCENDING"===u,partner_type:"INTERNAL"}});if(o){let e=await (0,d.pI)({businessId:s,assetIds:p.resource_response.data.data.map(s=>s.asset_id),resourceType:"AD_ACCOUNT"});return p.resource_response.data.data.reduce((s,a)=>({...s,data:{...s.data,data:s.data.data.map(s=>s.asset_id===a.asset_id?{...a,...e?.data.data[a.asset_id]}:s)}}),p.resource_response)}return p.resource_response},p=async({businessId:s,partnerId:e,limit:a,sortBy:i,searchBy:n="name",searchTerm:d,startIndex:_,sortDirection:c,partnerType:u="INTERNAL"})=>{let o=a&&a<t.xX?a:t.xX;return({data:[],...(await (0,r.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:o,sort_by:i,...d&&{search_by:n},start_index:_,search_value:d,sort_ascending:"ASCENDING"===c,partner_type:u,resource_type:"CATALOG"}})).resource_response.data}).data},E=async({businessId:s,partnerId:e,limit:a,sortBy:i,searchBy:n="name",searchTerm:d,startIndex:_,sortDirection:c})=>{let u=a&&a<t.xX?a:t.xX;return(await (0,r.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:u,sort_by:i,...d&&{search_by:n},start_index:_,search_value:d,sort_ascending:"ASCENDING"===c,partner_type:"EXTERNAL"}})).resource_response},m=async({businessId:s,partnerId:e,limit:a,sortBy:i,searchBy:n="name",searchTerm:d,startIndex:_,sortDirection:c})=>{let u=a&&a<t.xX?a:t.xX;return(await (0,r.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:u,sort_by:i,...d?{search_by:n}:{},start_index:_,search_value:d,sort_ascending:"ASCENDING"===c,resource_type:"ASSET_GROUP",partner_type:"INTERNAL"}})).resource_response},y=async(s,e,a=!1,i)=>{let d=(await (0,n.dF)({id:s,partnerType:"INTERNAL"},e,"PARTNER")).data.data.filter(s=>i&&s.id===i||!s.is_reseller),_=await Promise.all(d.map(async({id:e})=>(await (0,r.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:t.xX,resource_type:t.ww[a?t.tP.PROFILE:t.tP.AD_ACCOUNT],partner_type:"INTERNAL"}})).resource_response.data));return d.map((s,e)=>({...s,assets:_[e].data}))},b=async({businessId:s,partnerId:e,assetId:a})=>(await (0,r.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/${a}/`,method:"GET"})).resource_response,N=async({businessId:s,partnerId:e,assetId:a,permissions:t,clientBusinessId:i,businessHierarchyNodeId:n})=>(await (0,r.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"PUT",data:{permissions:t.includes("ADMIN")?["ADMIN"]:t,business_hierarchy_node_id:n,...i?{client_business_id:i}:{}}})).resource_response.data,A=async({businessId:s,partnerId:e,assetId:a,businessHierarchyNodeId:t,partner_type:i="INTERNAL"})=>(await (0,r.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"DELETE",data:{partner_type:i,business_hierarchy_node_id:t}})).resource_response.data,h=async({businessId:s,assetId:e,limit:a,sortBy:i,searchBy:n="FULL_NAME",searchTerm:d,startIndex:_,sortDirection:c})=>{let u=a&&a<t.xX?a:t.xX;return(await (0,r.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/partners/`,data:{page_size:u,sort_by:i,search_by:n,search_value:d,start_index:_,sort_ascending:"ASCENDING"===c}})).resource_response},I=async(s,e,a,i)=>{let d=(await (0,n.dF)({id:s,partnerType:"INTERNAL"},e,"PARTNER")).data.data.filter(s=>i&&s.id===i||!s.is_reseller),_=await Promise.all(d.map(async({id:e})=>(await (0,r.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:t.xX,resource_type:a,partner_type:"INTERNAL"}})).resource_response.data));return d.map((s,e)=>({...s,assets:_[e].data}))},v=async({businessId:s,partnerId:e,partnerType:a,limit:t,sortBy:i="name",sortDirection:n="ASCENDING",searchBy:d="name",searchTerm:_="",startIndex:c=0,id:u=""})=>{let{data:o}=(await (0,r.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/audiences/shared`,method:"GET",data:{partner_type:a,limit:t,sort_by:i,search_by:d,search_value:_,start_index:c,sort_ascending:"ASCENDING"===n,id:u}})).resource_response;return o.audiences||[]}},724409:(s,e,a)=>{a.d(e,{GL:()=>A,JC:()=>l,Jg:()=>h,QC:()=>y,Qd:()=>p,UQ:()=>_,bP:()=>I,dx:()=>u,kF:()=>v,kH:()=>E,kY:()=>m,kZ:()=>c,mZ:()=>b,n5:()=>N,p6:()=>o,p_:()=>d,pe:()=>T});var t=a(767881),r=a(909015),i=a(400416),n=a(668868);let d=async(s,e,a,t)=>({data:[],...(await (0,i.Z)({url:`/ads/v4/business_access/businesses/${a}/members/batch_invite/`,method:"POST",data:{business_role:e,members:s,validate_only:!!t}})).resource_response.data}),_=async(s,e,a)=>({data:[],...(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,method:"GET",data:{limit:r.xX,...0===a||1===a?{asset_permission_type:(0,t.bO)(a)}:{}}})).resource_response.data}).data,c=async(s,e,a)=>({data:[],...(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,method:"GET",data:{limit:r.xX,resource_type:"CATALOG",...0===a||1===a?{asset_permission_type:(0,t.bO)(a)}:{}}})).resource_response.data}).data,u=async(s,e,a,t)=>({data:void 0,auxData:void 0,...(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/`,method:"DELETE",data:{business_role:a,business_hierarchy_node_id:t}})).resource_response.data}),o=async(s,e,a,t)=>(await (0,i.Z)({url:`ads/v4/business_access/businesses/${a}/members/${e}/`,method:"PUT",data:{business_role:s,...t?{business_hierarchy_node_id:t}:{}}})).resource_response.data,l=async({id:s,limit:e,filters:a,memberIds:t=[],sortBy:n="FULL_NAME",searchBy:d=["FULL_NAME","EMAIL","USERNAME"],searchTerm:_="",startIndex:c=0,sortDirection:u="ASCENDING",includeAssetSummary:o})=>{let l=e&&e<r.xX?e:r.xX;return(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/`,data:{page_size:l,member_ids:t.length?t.join(","):void 0,filters:a?JSON.stringify(a):void 0,sort_by:n,search_by:d,start_index:c,search_value:_,assets_summary:o?"true":"false",sort_ascending:"ASCENDING"===u,extend_info_from_user_api:!0}})).resource_response},p=async(s,e)=>{let a=await s({...e,startIndex:0}),{total_data_count:t,data:i}=a.data,n=Math.ceil(t/r.xX),d=[];for(let a=1;a<n;a+=1){let t=a*r.xX;d.push(s({...e,startIndex:t}))}let _=(await Promise.all(d)).reduce((s,e)=>[...s,...e.data.data],i);return{...a,data:{...a.data,data:_}}},E=async({id:s,limit:e,filters:a,sortBy:t="full_name",searchBy:i="full_name",searchTerm:n="",startIndex:d=0,sortDirection:_="ASCENDING",includeAssetSummary:c})=>{let u=Array.isArray(i)?i:[i],o=["FULL_NAME","USERNAME","BUSINESS_ID","EMAIL"].filter(s=>u.map(s=>s.toUpperCase().trim()).includes(s)),p=t.toUpperCase().trim()?"FULL_NAME":void 0;return l({businessId:s,id:s,limit:!e||e>r.xX?r.xX:e,filters:a,sortBy:p,searchBy:o,searchTerm:n,startIndex:d,sortDirection:_,includeAssetSummary:c})},m=async({id:s})=>(await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/owner/`})).resource_response.data,y=async({businessId:s,personId:e,limit:a,sortBy:d,searchBy:_="name",searchTerm:c,startIndex:u,sortDirection:o,assetPermissionType:l,includeAssetSummary:p=!1})=>{let E=a&&a<r.xX?a:r.xX,m=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{page_size:E,sort_by:d,search_by:_,start_index:u,search_value:c,sort_ascending:"ASCENDING"===o,...0===l||1===l?{asset_permission_type:(0,t.bO)(l)}:{}}});if(p){let e=await (0,n.pI)({businessId:s,assetIds:m.resource_response.data.data.map(s=>s.asset_id),resourceType:"AD_ACCOUNT"});return m.resource_response.data.data.reduce((s,a)=>({...s,data:{...s.data,data:s.data.data.map(s=>s.asset_id===a.asset_id?{...a,...e?.data.data[a.asset_id]}:s)}}),m.resource_response)}return m.resource_response},b=async({businessId:s,personId:e,limit:a,sortBy:d,searchBy:_="name",searchTerm:c,startIndex:u,sortDirection:o,assetPermissionType:l,includeAssetSummary:p=!1})=>{let E=a&&a<r.xX?a:r.xX,m=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{sort_by:d,search_by:_,start_index:u,search_value:c,sort_ascending:"ASCENDING"===o,page_size:E,resource_type:"PROFILE",...0===l||1===l?{asset_permission_type:(0,t.bO)(l)}:{}}});if(p){let e=await (0,n.pI)({businessId:s,assetIds:m.resource_response.data.data.map(s=>s.asset_id),resourceType:"PROFILE"});return m.resource_response.data.data.reduce((s,e)=>({...s,data:{...s.data,data:{...s.data.data,[e.asset_id]:{...s.data.data[e.asset_id],...e}}}}),e)}return m.resource_response},N=async({businessId:s,personId:e,limit:a,sortBy:t,searchBy:n="name",searchTerm:d,startIndex:_,sortDirection:c,assetPermissionType:u})=>{let o=a&&a<r.xX?a:r.xX;return(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{page_size:o,sort_by:t,search_by:n,start_index:_,search_value:d,sort_ascending:"ASCENDING"===c,resource_type:"ASSET_GROUP",asset_permission_type:u}})).resource_response},A=async({businessId:s,personId:e,assetId:a})=>(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/${a}/`})).resource_response,h=async({businessId:s,memberId:e,assetId:a,businessHierarchyNodeId:t,permissions:r})=>(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"PUT",data:{permissions:r.includes("ADMIN")?["ADMIN"]:r,business_hierarchy_node_id:t}})).resource_response.data,I=async({businessId:s,memberId:e,assetId:a,businessHierarchyNodeId:t})=>(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"DELETE",data:{business_hierarchy_node_id:t}})).resource_response.data,v=async({businessId:s,assetId:e,limit:a,sortBy:t,searchBy:n="FULL_NAME",searchTerm:d,startIndex:_,sortDirection:c})=>{let u=a&&a<r.xX?a:r.xX,{data:o}={data:void 0,...(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/members/`,method:"GET",data:{page_size:u,sort_by:t,search_by:n,search_value:d,start_index:_,sort_ascending:"ASCENDING"===c}})).resource_response};return o},T=async({businessId:s,personId:e,limit:a,sortBy:d,searchBy:_="name",searchTerm:c,startIndex:u,sortDirection:o,assetPermissionType:l,includeAssetSummary:p=!1})=>{let E=a&&a<r.xX?a:r.xX,m=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{page_size:E,resource_type:"CATALOG",sort_by:d,search_by:_,start_index:u,search_value:c,sort_ascending:"ASCENDING"===o,...0===l||1===l?{asset_permission_type:(0,t.bO)(l)}:{}}});if(p){let e=await (0,n.pI)({businessId:s,assetIds:m.resource_response.data.data.map(s=>s.asset_id),resourceType:"CATALOG"});return m.resource_response.data.data.reduce((s,a)=>({...s,data:{...s.data,data:s.data.data.map(s=>s.asset_id===a.asset_id?{...a,...e?.data.data[a.asset_id]}:s)}}),m.resource_response)}return m.resource_response}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/35532-d1a27ee4c8ac041c.mjs.map