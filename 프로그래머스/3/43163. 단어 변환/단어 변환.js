function solution(begin, target, words) {
    if (!words.includes(target)) return 0;

    const isOneDiff = (a, b) => [...a].filter((v, i) => v !== b[i]).length === 1;
    const queue = [[begin, 0]];
    const visited = new Set([begin]);

    while (queue.length) {
        const [word, steps] = queue.shift();
        if (word === target) return steps;

        words.forEach(next => {
            if (!visited.has(next) && isOneDiff(word, next)) {
                visited.add(next);
                queue.push([next, steps + 1]);
            }
        });
    }

    return 0;
}
