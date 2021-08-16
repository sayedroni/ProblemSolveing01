// ***********problem No-1**********

function seerToMon(seer)
{
    if(seer < 40)
    {
        console.log("Please input a valid Number");
    }
    else
    {
    let mon = seer/40;      /* we know that 40 seer = 1 Mon */
    return mon;
    }
}

// ***********problem No-2**********

function totalSales(shirt,pant,shoes)
{
   let totalShirtPrice = 100*shirt ;
   let totalPantPricre = 200*pant ;
   let totalShoesPrice = 500*shoes ;

   let subTotalPrice = totalShirtPrice + totalPantPricre + totalShoesPrice ;
   return subTotalPrice;
}

// ***********problem No-3**********

function deliveryCost(tShirtQuantity)
{
    let FirstPriceTag  = 100;
    let SecondPriceTag = 80;
    let ThirdPriceTag  = 50;

    if(tShirtQuantity <= 100)
    {
        let FirstShirtPriceWill = FirstPriceTag * tShirtQuantity;
        return FirstShirtPriceWill;
    }
    else if(tShirtQuantity <= 200)
    {
        let FirstShirtPriceWill = FirstPriceTag * 100;
        let ramainShirt = tShirtQuantity-100;
        let SecondShirtPriceWill = ramainShirt * SecondPriceTag;
        let totalPrice = FirstShirtPriceWill + SecondShirtPriceWill;
        return totalPrice;
    }
    else
    {
        let FirstShirtPriceWill  = FirstPriceTag  * 100;
        let SecondShirtPriceWill = SecondPriceTag * 100;
        let remainShirt = tShirtQuantity-200;
        let ThirdShirtPriceWill = ThirdPriceTag * remainShirt;
        let TotalCost = FirstShirtPriceWill + SecondShirtPriceWill + ThirdShirtPriceWill;
        return TotalCost;
    }

}


// ***********problem No-4**********

function perfectFriend(friends)
{

    for(i=0; i<friends.length; i++)
    {
        let frnd = friends[i];
        if(frnd.length==5)
        {
            return frnd;
        }    
    }  
}
