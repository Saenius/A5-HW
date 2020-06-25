const var1Text = $('.j-var-1');
const var2Text = $('.j-var-2');
const var3Text = $('.j-var-3');
const var4Text = $('.j-var-4');
const var5Text = $('.j-var-5');
const var6Text = $('.j-var-6');
const speachText = $('.j-speach');

const createButton = $('.j-btn-primary');
const replaceButton = $('.j-btn-secondary');
const result = $('#result')

const startText = {
	"text":[
	"Жили-были {var1} да {var2}",
	"Была у них {var3}",
	"Снесла {var3} {var4}, не простое - золотое",
	"- {var1} бил, бил - не разбил",
	"- {var2} била, била - не разбила",
	"{var5} бежала, {var6} задела, {var4} упало и разбилось.",
	"{var1} плачет, {var2} плачет, а {var3} кудахчет:",
	"{speach}"]
};

createButton.click(function() {
    result.html(startText.text);
})

replaceButton.click(function() {
	const var1 = var1Text.val();
	const var2 = var2Text.val();
	const var3 = var3Text.val();
	const var4 = var4Text.val();
	const var5 = var5Text.val();
	const var6 = var6Text.val();
	const speach = speachText.val();
	
	const replaceText = {
	"text":[
	`Жили-были ${var1} да ${var2}`,
	`Была у них ${var3}`,
	`Снесла ${var3} ${var4}, не простое - золотое`,
	`- ${var1} бил, бил - не разбил`,
	`- ${var2} била, била - не разбила`,
	`${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
	`${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
	`${speach}`]
};
	result.html(replaceText.text)
})


