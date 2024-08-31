import axiosClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
  .then(({ data }) => {
    console.log(data.meals, keyword);
    commit('setSearchedMeals', data.meals)
  })
}