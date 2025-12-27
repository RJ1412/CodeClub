import autocannon from "autocannon";

const runLoadTest = () => {
    const instance = autocannon({
        url: "http://localhost:3000/api/v1/qotd/leaderboard",
        connections: 100, // 100 concurrent connections
        duration: 10,     // 10 seconds
        headers: {
            "Content-Type": "application/json"
        }
    });

    console.log("🚀 Starting load test on Leaderboard endpoint...");

    autocannon.track(instance, { renderProgressBar: true });

    instance.on("done", (result) => {
        console.log("\n✅ Load Test Completed!");
        console.log(`Requests/sec: ${result.requests.average}`);
        console.log(`Latency (avg): ${result.latency.average} ms`);
        console.log(`Total Requests: ${result.requests.total}`);
        console.log(`Total Errors: ${result.errors}`);
    });
};

runLoadTest();
