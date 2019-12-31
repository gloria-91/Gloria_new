import page from './../Pages/Login_Page';

fixture `Test Login`
    .page `${process.env.URL}`;

test('Test a successfull login', async t => {
    await page.login ( process.env.EMAIL, process.env.PASSWORD );
});

