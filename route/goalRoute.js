const router = require("express").Router();

const Goal = require("../model/Goal");

router.get("/", async (req, res) => {
	const goals = await Goal.find();

	return res.status(200).json(goals);
});

router.post("/", async (req, res) => {
	const { name, priority, label } = req.body;

	const goal = await Goal.create({
		name,
		priority,
		label,
	});

	return res.status(201).json(goal);
});

module.exports = router;