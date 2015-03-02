javascript:HUBSPOT_ACCOUNT_ID = <insert your account id>;
pattern = /https:\/\/app.hubspot.com\/sales\/\d*\/contact\/(\d*)\//;
matches = location.href.match(pattern);
if(!matches) {
		alert("Can't find hubspot URL");
}
contactid = matches[1];
location.href = "https://app.hubspot.com/contacts/"+HUBSPOT_ACCOUNT_ID+"/contact/" + contactid;
