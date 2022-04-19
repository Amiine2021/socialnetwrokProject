import ProfilePic from "./Profile-pic";

import { render } from "@testing-library/react";


test('when pror url is falsy, the url ends in default',()=>{
    const {imgElem} = render(<ProfilePic />);
    expect(imgElem.src.endsWith('default.jpg')).toBe(true);
});
test('when a url is passed, the src equal to  that  url',()=>{

    const {container} = render(<ProfilePic url={'www.example.com '} />);
    const imgElem = container.querySelector('img');
    expect(imgElem.src.endsWith('default.jpg')).toBe(true);
}); 



test('first and last passed via props get set as alt value',()=>{
    const {container} = render(<ProfilePic first={"first"} last={"last"}  />);
    const imgElem = container.querySelector('img');
    expect(imgElem.alt.toBe('some value'));

});

test('onClick of img , we run the fn passed via props',()=>{
    const mockedFnForOnClick = jest.fn(()=> console.log('clicked!!!'));
    const {container} = render(<ProfilePic onClick={mockedFnForOnClick} />);
    const imgElem = container.querySelector('img');
    // Fire our event!
    let fireEvent = 
    fireEvent.click(imgElem);
    expect(mockedFnForOnClick.mock.calls.lengh).toBe(1);
});
