export default {
    set_categories(state, categories){
        state.categories = categories
    },
    set_questions(state, questions){
        state.questions = questions
    },
    
    // set_categories_count(state, {id, count}){
    //     let category = state.categories.find(x => x.id == id)
    //     category.categoriesCount = count
    //},
}