const {test,expect}=require("@playwright/test");
const {LoginPage}=require("../pageobjects/techLogin");
const {MyDashboard}=require("../pageobjects/myDashboardTech");
const {ProcessCheckout}=require("../pageobjects/checkouTech");
const {VerifyChekoutProcess}=require("../pageobjects/verifyTechCKT");


test("verify u are able to change or reorder previously added product",async({page})=>
{
    const Login=new LoginPage(page);
    const shoppingCart=new MyDashboard(page);
    const checkOut=new ProcessCheckout(pae);
    const orderConformed=new VerifyChekoutProcess(page);
    //1.go to https://live.techPanda.org
    await page.goto("http://live.techpanda.org/");
    //2.click on myaccount
    //3.login 
    await Login.gotoLogin();
    await Login.login("qasntest@gmail.com","Qasntest!");
    //4.click reorder link
    //5.verify grand total is change
    await shoppingCart.goToShoppingCart("10");
    //6.complete billing and shipping info
    await checkOut.processCkt();
    await page.waitForURL("http://live.techpanda.org/index.php/checkout/onepage/success/");
    //7.verify order is generated and note the order
    await orderConformed.noteOrderNumber();

});