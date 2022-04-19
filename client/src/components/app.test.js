import App from 'App.js';
import {render,waitFor} from '@testing-library/react';
//let's start wrtiting some test
test("App eventuall renders a div",async ()=>{
    // mocking the return from our fetch to test a for the ui 
    //  we actually only need the id velue mocked! As that's the only value the
    // has influence on our UI
    fetch.mockResolvedValue({
        async json(){
            return{
                // first:"Amine",
                // last: "guetta",
                // url: 'www.someUrl.com',
                id: 1,
            };
        }
    });

    const {container} = render(<App />);
    // console.log("container.innerHTML", container.innerHTML);
    // that what we exepct the UI look like at the biginning 
    // vakues into state 
    expect(container.innerHTML).toContain("...loading");

    await waitFor(()=>{
        "container.querySelector"('.app-container');
        container.querySelector('.app-container');

    });
});

