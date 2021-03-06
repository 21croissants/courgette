SyntaxHighlighter.brushes.Cucumber = function()
{
	var funcs		= 'pizikabubu asdccdsdvvvf';
	var keywords	= 'Feature Scenario And Then When Given';
	var operators	= 'asdcdcxzfddf maks ksmd asd dasaddasd';

	this.regexList = [
		{ regex: /--(.*)$/gm,												css: 'comments' },
		{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,	css: 'string' },
		{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),				css: 'color2' },
		{ regex: new RegExp(this.getKeywords(operators), 'gmi'),			css: 'color1' },
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'),				css: 'keyword' }
		];
};
SyntaxHighlighter.brushes.Cucumber.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Cucumber.aliases    = ['cuke'];
