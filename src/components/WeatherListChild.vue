<template>
    <div class="cityData">
        <div class="row">
            <div class="col-sm-2">
            <small  class="text-muted"> Population: </small>
            </div>
            <div class="col-sm-2">
            <small  class="text-muted"><b>{{ child.population }}</b></small>
            </div>
            <div class="col-sm-2">
            <small  class="text-muted"> Latitude: </small>
            </div>
            <div class="col-sm-2">
            <small  class="text-muted"><b>{{ child.latitude }}</b></small>
            </div>
            <div class="col-sm-2">
            <small  class="text-muted"> Longitude:</small>
            </div>
            <div class="col-sm-2">
            <small  class="text-muted"><b>{{ child.longitude }}</b></small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // Child to weather list that will display city population, latitude, longitude
    name: 'WeatherListChild',
    props: {
        item: Object
    },
    data() {
        return {
            child: this.item
        }  
    }
}
</script>


