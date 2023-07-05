const {createApp} = Vue

createApp({
    data(){
        return{
        productos: [],
        url: 'https://sebasberfidel.pythonanywhere.com/productos',
        cargando: true,
        error: false,

        }
    
    },

    methods:{
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.productos = data;
                this.cargando = false;

            })
            .catch(err => {
                console.error(err);
                this.error = true;
            })
        }, 
        
        eliminar(producto){
            const url = this.url + '/' + producto;
            let options = {
                method: 'DELETE',
            }
            fetch(url, options)
            .then(res => res.json())
            .then(res => {
                location.reload()
            })
            .catch(err => {
                console.error(err);

            })
        }

    }, 

    created(){
        this.fetchData(this.url);



    }

}).mount('#app')