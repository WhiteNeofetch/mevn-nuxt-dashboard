<template>
  <Page>
  <h2>Это продукты</h2>
    <card>
    <nuxt-link class="btn btn-success" to="products/form">Добавить продукт</nuxt-link>
  <pageTable :columns="columns" :actions="actions" :data="products" @onEdit="handleEdit"
             @onDelete="handleDelete"/>
    </card>
  </Page>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

//components


//setup
import {columns,actions} from "./setup";

export default {
  name:'ProductsPage',
  components:{
    pageTable: () =>import('@/components/pageTable'),
    Card: () => import ('@/components/Card'),
    Page:()=>import('@/components/Page')
  },
  computed:{
    ...mapGetters({
      products:'products/items'
    })
  },
  data:()=>({
    columns,
    actions
  }),
  methods:{
    ...mapActions({
      fetchProducts:'products/fetchAll',
      deleteProduct:'products/delete'
    }),
    handleEdit({ id }){
      this.$router.push(`/products/form/${id}`)
      console.log('Изменяем', id)
    },
    async handleDelete({id}){
      await this.deleteProduct(id);
      this.fetchProducts();
    }
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>

<style lang="scss">

</style>
