<script>
    import { Radar } from "vue-chartjs";

    export default {
        extends: Radar,
        mounted() {
            this.renderChart(
                {
                    labels: [
                        'Ruby(Rails)',
                        'python',
                        'PHP',
                        'Node.js',
                        'MySQL'
                    ],
                    datasets: [
                        {
                            label:"サーバーサイド",
                            backgroundColor:"rgba(66,133,244,0.2)",
                            borderColor: "rgba(66,133,244,0.8)",
                            borderWidth:"2",
                            pointBackgroundColor:"rgba(66,133,244,0.8)",
                            data: [2,2,1,2,2]
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

