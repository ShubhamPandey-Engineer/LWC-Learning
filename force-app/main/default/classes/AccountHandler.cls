public  class AccountHandler
{
    @AuraEnabled(cacheable =true)
    public static Account getRecordData(String recordId){
        try{
            Account accountObj = new Account();
        accountObj  = [Select name from Account where id =: recordId with security_enforced ];
        return accountObj;
        }
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
        
    }
    //account deletion
    public static boolean beforeDeletion(Map<Id, Account> oldAccounts)
        {
            // if account's annual revenue > $2000 , don't allow to delete the account.
            for(Id acc : oldAccounts.keyset())
            {
                 if(oldAccounts.get(acc).annualRevenue > 2000)
                 {
                     return true;
                 }
            }
            return false;
        }
    

        // before Update
        public static void beforeUpdate(List<Account> newAccount , Map<Id,Account> oldAccountMap)
        {

            // iterate account in newAccount list for any update in prospect
            for(Account updatedAccount : newAccount)
            {

             // check for prospect update
             if(updatedAccount.Rating != oldAccountMap.get(updatedAccount.Id).Rating)
             {
                //check for warm/ hot
                if(updatedAccount.Rating == 'Warm' || updatedAccount.Rating == 'Hot')
                {
                    //set salesProbability field to true
                    updatedAccount.Sales_Probability__c=true;
                //  updatedAccount.addError('q'+newAccount[0].Rating); 
                    system.debug(updatedAccount.Rating);
                }
                else{
                    updatedAccount.Sales_Probability__c=false;
                }
                
             }
            }

        }




        //after Update
         public static void afterUpdate(List<Account> updatedAccount , Map<Id,Account> oldAccountMap)
         {
             system.debug(updatedAccount);
          //get account's releted opportunities
          
          Map<Id,Opportunity> opp=new Map<Id,Opportunity>([Select Id, Phone_Number__c from Opportunity where AccountId =: updatedAccount]);
          List<Opportunity> updatedOpp=new List<Opportunity>();
          for(Account acc : updatedAccount)
              
          {
              
              if(acc.Phone != oldAccountMap.get(acc.Id).Phone)
              {
                  for(Opportunity op : [Select Phone_Number__c ,Id from Opportunity where AccountId =: updatedAccount ])
                  {
                      op.Phone_Number__c=acc.Phone;
                   
                      updatedOpp.add(op);
                  }
              }
          }
          update updatedOpp;
         }
    
public static void insertAccount(integer newAccountCount)
    {
     List<Account> addAccounts =new List<Account>();
      integer N =1;
     while( N <= newAccountCount)
{
Account acc =new Account();
    acc.Name='Acme Inc ' + N;
    acc.AccountNumber='A000n';
    addAccounts.add(acc);
    N++;
    
}
        insert addAccounts;
        
    }


public static  Account insertNewAccount(string accountName){
    Account acc =new Account(Name = accountName);
    try{
    insert acc;
     
    }
    catch(DMLException e)
    {
   return null;
    }
    return acc;

}

}
/*public class AccountHandler { public static void  updateAccount(List<Account> newAccount , map<Id,Account> oldAccount) { List<Account> accList=new List<Account>(); for(Account acc : newAccount) { account a =new Account(); a.Id=acc.Id; accList.add(a); } //this will again trigger the update trigger update accList; } public static  Account  insertNewAccount(String accountName) { Account acc=new Account(Name= accountName); try{ //create a new account insert acc; } catch(DMLException e) { system.debug(e.getMessage()); return null; } return acc; }}
 * */