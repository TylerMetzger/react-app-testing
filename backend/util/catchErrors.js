module.exports = catchErrors = async (res, f) => {
    try {
        const result = await f();
        res.send({ ok: true, data: result });
    } catch (e) {
        res.status(400).send({ ok: false, error: e.message });
    }
};