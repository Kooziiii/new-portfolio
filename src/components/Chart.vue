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
                            data: [10, 5, 5, 2, 5]
                        }
                    ]
                },
                {
                    responsive: true,
                    maintainAspectRatio: false,
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            ticks: {
                                stepSize: 1, // 目盛の間隔
                                max: 10, //最大値
                                beginAtZero: true},
                            xAxes: [
                                {
                                    display: false,
                                    stacked: false,
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    stacked: false,
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }
                }
            );
        }
    };
</script>

