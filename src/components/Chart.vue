<script>
    import { Radar } from "vue-chartjs";

    export default {
        extends: Radar,
        mounted() {
            this.renderChart(
                {
                    labels: [
                        'HTML/CSS',
                        'JavaScript',
                        'jQuery',
                        'Vue.js',
                        'WordPress'
                    ],
                    datasets: [
                        {
                            label:"フロントエンド",
                            backgroundColor:"rgba(66,133,244,0.2)",
                            borderColor: "rgba(66,133,244,0.8)",
                            borderWidth:"2",
                            pointBackgroundColor:"rgba(66,133,244,0.8)",
                            data: [3,2,2,3,3]
                        },
                    ]
                },
                {
                    scale: {
                        ticks: {
                            stepSize: 1, // 目盛の間隔
                                max: 5, //最大値
                                beginAtZero: true
                            }
                    },
                    legend: {
                        display: false
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                }
            );
        }
    };

</script>

