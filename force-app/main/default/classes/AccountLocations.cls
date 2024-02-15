public class AccountLocations {

    public List<Account> accounts{get;set;}
    public AccountLocations(){
        accounts = [select Id, Name, BillingStreet, BillingCity, BillingState, BillingCountry from Account where BillingStreet !=null and BillingCity !=null and BillingState !=null and BillingCountry != null limit 20];
        
    }


    /*public static List<Account> getAcounts() {
        List<Account> listAcct;
        list = 
        return listAcct;
    }*/

}