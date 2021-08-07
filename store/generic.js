import GenericService from "@/services/generic.service";

const crudStore = ({name,url,keyName}) =>{
  const genericService = new GenericService({
    name,
    url
  })


  return{
    state:()=>({
      item:{},
      items:[],
      itemError:null
    }),
    actions:{
      async fetchAll({commit}){
        try{
          const items = await genericService.fetchAll()

          commit('fetchItemsSuccess',items)
        } catch (err){
          commit('fetchItemsFail',{
            errType:`${name} fetchAll failed`,
            err
          })
        }
      },
      async fetchOne({commit},id){
        try{
          const item = await genericService.fetchOne(id)

          commit('fetchItemSuccess',item)
        } catch (err){
          commit('fetchItemFail',{
            errType:`${name} fetchOne failed`,
            err
          })
        }
      },
      async create({commit}, payload){
        try{
          console.log('fd11111')
          
          const item = await genericService.create(payload)
          commit('createItemSuccess',item)
        } catch (err){
          commit('createItemFail',{
            errType:`${name} create failed`,
            err
          })
        }
      },
      
      async update({commit},{payload,id,image}){
        try{
          console.log(image)
          // function DataURIToBlob(dataURI) {
          //   const splitDataURI = dataURI.split(',')
          //   const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
          //   const mimeString = splitDataURI[0].split(':')[1].split(';')[0]
    
          //   const ia = new Uint8Array(byteString.length)
          //   for (let i = 0; i < byteString.length; i++)
          //       ia[i] = byteString.charCodeAt(i)
    
          //   return new Blob([ia], { type: mimeString })
          // }

          // const file = DataURIToBlob(image)
    
          // const fd = new FormData()
          
         
          // fd.append('image',file)
          
          const item = await genericService.update(id,payload,fd)
          console.log(item)
          commit('updateItemSuccess',item)
        } catch (err){
          commit('updateItemFail',{
            errType:`${name} update failed`,
            err
          })
        }
      },
      async delete({commit},id){
        try{
          const item = await genericService.delete(id)
          commit('deleteItemSuccess',item)
        } catch (err){
          commit('deleteItemFail',{
            errType:`${name} delete failed`,
            err
          })
        }
      },
    },
    mutations:{
      updateItemSuccess(state,item){
        state.item = item
      },
      updateItemFail(state,err){
        state.itemError = err
      },

      createItemSuccess(state,item){
        state.item = item
      },
      createItemFail(state,err){
        state.itemError = err
      },

      fetchItemSuccess(state,item){
        state.item = item
      },
      fetchItemFail(state,err){
        state.itemError = err
      },

      fetchItemsSuccess(state,items){
        state.items = items
      },
      fetchItemsFail(state,err){
        state.itemError = err
      },

      deleteItemSuccess(){

      },
      deleteItemFail(state,err){
        state.itemError = err
      }
    },
    getters:{
      item:(state)=>state.item,
      items:(state)=>state.items,
      itemsError:(state)=>state.itemsError
    }
  }
}

export default crudStore
