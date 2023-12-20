/// <reference types="Cypress" />
import SubscriptionLP from '../../support/pageobject/subscriptionlp'

describe ('SusbscriptionLP', function(){

    const subscriptionlp = new SubscriptionLP()

    this.beforeEach(()=>{
        subscriptionlp.navigateToUrl()
    })

    it('Header Validation and Header Image',function(){
        subscriptionlp.verifyPageTitle()
        subscriptionlp.lpHeader()
        //subscriptionlp.lpHeaderImage()

    })

    
    it('Click Subscribe Now',function()
    {
        subscriptionlp.subscribeNow()
    })

    it('Cancel and Card Logos Validation',function()
    {
        subscriptionlp.lpCancel()
        subscriptionlp.lpPayPallogo()
        subscriptionlp.lpCreditCardslogo()
    })

    it('Footer Validations',function()
    {
        subscriptionlp.nytAllAccessFooterlogo()
        subscriptionlp.nytOtherSubsFooterlogo()
        subscriptionlp.faqsFooter()
        subscriptionlp.contactUsFooter()
        subscriptionlp.giftSubsFooter()
        subscriptionlp.downloadAppFooter()
        subscriptionlp.homeDeliveryFooter()
        subscriptionlp.groupSubsFooter()
        subscriptionlp.nytFooterLogo()
        subscriptionlp.marketingQuote()
        //subscriptionlp.termsofSaleFooter()
        //subscriptionlp.privacyPolicyFooter()
        subscriptionlp.interestInPrint()
        subscriptionlp.nytHDDeliveryQuote()
        subscriptionlp. subsDeliveryQuote()
        subscriptionlp.zipCode()
        subscriptionlp.findOffers()
    })
    
    
    
})