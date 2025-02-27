class Account{
    private String name;
    private int accNo;
    private int balance;
    public Account(String name, int accNo, int balance) {
        this.name = name;
        this.accNo = accNo;
        this.balance = balance;
    }

    public String getName() {
        return name;
    }



    public void setName(String name) {
        this.name = name;
    }

    public int getAccNo() {
        return accNo;
    }

    public void setAccNo(int accNo) {
        this.accNo = accNo;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    @Override
    public boolean equals(Object obj) {
        Account obj1=(Account)obj;
        return this.name.equals(obj1.name) && this.balance == obj1.balance;
    }
}
public class Bank {
    public static void main(String[] args) {
        Account a1=new Account("Hemanth",1,1000);
        Account a2=new Account("Srinivas",2,5000);
        Account a3=new Account("Hemanth",3,1000);
        Account a4=new Account("Hemanth",3,3000);
        System.out.println(a1.equals(a2)); //false
        System.out.println(a1.equals(a3)); //true
        System.out.println(a1.equals(a4)); //false
    }
}