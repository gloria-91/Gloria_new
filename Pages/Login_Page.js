import { Selector, t } from 'testcafe';

class Login_Page {


    constructor () 
    {
        this.login_button       = Selector ('.xC29iLDJOfZeDm_x5o7DH');
        this.email_textbox      = Selector ('#email');
        this.password_textbox   = Selector ('#password');
        this.frame              = Selector ('._3ga5XTxZEFAiG-Q7KQfQnT');
        
    }

    async login(email, password)
    {
        await this.click_login();
        await t.switchToIframe(this.frame);
        await this.type_email(email);
        await this.type_password(password);
        await t
        .pressKey("enter")
        .switchToMainWindow();

    } 

    async click_login()
    {
        await t.click(this.login_button);
    } 
    
    async type_email( email )
    {
        await t.typeText(this.email_textbox, email);
    }

    async type_password( password )
    {
        await t.typeText(this.password_textbox, password);
    }
}

export default new Login_Page();
