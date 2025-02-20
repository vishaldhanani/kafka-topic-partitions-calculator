function calculatePartitions() {
    const throughput = parseInt(document.getElementById('throughput').value);
    const processingTime = parseInt(document.getElementById('processingTime').value);
    const timeUnit = document.getElementById('timeUnit').value;

    if (isNaN(throughput) || isNaN(processingTime)) {
        alert('Please enter valid numbers');
        return;
    }

    let throughputPerMinute;
    switch (timeUnit) {
        case 'seconds':
            throughputPerMinute = throughput * 60;
            break;
        case 'minutes':
            throughputPerMinute = throughput;
            break;
        case 'hours':
            throughputPerMinute = throughput / 60;
            break;
        case 'days':
            throughputPerMinute = throughput / 1440; // 1440 minutes in a day
            break;
        default:
            throughputPerMinute = throughput;
    }

    const partitions = Math.ceil((throughputPerMinute * (processingTime / 1000)) / 60);
    document.getElementById('result').innerText = `Recommended Partitions: ${partitions}`;
}

document.getElementById('calculateButton').addEventListener('click', calculatePartitions);
