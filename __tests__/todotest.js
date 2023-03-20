import { getLocalData, setLocalData } from "../src/services/localstorageService";


test('Check if Todo is Adding to local storage successfully', async () => { 
    let todoBeforeAdd = 0;
    let todoAfterAdd = 0;
    await getLocalData('todos').then((todos) => {
        if (todos != null) {
            todoBeforeAdd = todos.length;
        } else {
            todoBeforeAdd = 0;
        }
    }); 
 
    await setLocalData('todos', [{value: "Hey", date:"hey"}]).then((todos) => {
        if (todos != null) {
            todoAfterAdd = todos.length;
        } else {
            todoAfterAdd = 1;
        }
    })

    expect(todoAfterAdd).toBe((todoBeforeAdd+1))
    
})

test('Check if Todo is deleting from local storage successfully', async () => { 
    let todoBeforeDelete = 0;
    let todoAfterDelete = 0;
    let todoArray = [{value:"This is a Todo", date: "233000000222"}];
    await setLocalData('todos', todoArray);
    await getLocalData('todos').then((todos) => {
        if (todos != null) {
            todoBeforeDelete = todos.length;
        } else {
            todoBeforeDelete = 0;
        }
    }); 
    
    todoArray.pop();

    await setLocalData('todos', todoArray);
    await getLocalData('todos').then((todos) => {
        if (todos != null) {
            todoAfterDelete = todos.length;
        } else {
            todoAfterDelete = 0;
        }
    }); 

    expect(todoAfterDelete).toBe((todoBeforeDelete-1))
    
})

