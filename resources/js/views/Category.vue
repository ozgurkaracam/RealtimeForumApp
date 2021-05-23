<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col>
                    <AddCategory />
                    <Categories />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import Categories from "../components/category/Categories";
import AddCategory from "../components/Category/AddCategory";
export default {
    components: {AddCategory, Categories}
}
</script>

<style scoped>

</style>
