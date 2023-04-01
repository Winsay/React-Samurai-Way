import profileReducer from "./profile-reducer";
import { addPostActionCreator, deletePostActioncreator } from "./profile-reducer";

let state = {
    dataPost: [
        { id: 1, text: 'Hey, why nobody loves me?' },
        { id: 2, text: 'Durov return wall' },
        { id: 3, text: 'Make America great again' },
        { id: 4, text: 'Thank God i\'m not a Muscovite' },
        { id: 5, text: 'Glory to Ukraine' },
    ],
}

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-camasutra.com');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.dataPost.length).toBe(6);
})
it('text of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-camasutra.com');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.dataPost[5].text).toBe('it-camasutra.com');
})
it('after removal, the length should decrease', () => {
    // 1. test data
    let action = deletePostActioncreator(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.dataPost.length).toBe(4);
})
it('if id is incorrect array not changed', () => {
    // 1. test data
    let action = deletePostActioncreator(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.dataPost.length).toBe(5);
})

