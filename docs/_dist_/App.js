import './App.css.proxy.js';
/* src/App.svelte generated by Svelte v3.22.3 */
import {
	SvelteComponent,
	append,
	attr,
	check_outros,
	create_component,
	destroy_block,
	destroy_component,
	detach,
	element,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	run_all,
	safe_not_equal,
	set_data,
	set_input_value,
	set_style,
	space,
	text,
	to_number,
	transition_in,
	transition_out,
	update_keyed_each
} from "/web_modules/svelte/internal.js";

import Diagram from "./Diagram.js";
import { packer } from "/web_modules/guillotine-packer.js";
import { getColor } from "./colors.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	child_ctx[17] = i;
	return child_ctx;
}

// (30:12) {#each fabricPieces as fabricPiece, i (fabricPiece.id)}
function create_each_block(key_1, ctx) {
	let li;
	let div3;
	let div1;
	let div0;
	let t0;
	let strong;
	let t1;
	let t2_value = /*i*/ ctx[17] + 1 + "";
	let t2;
	let t3;
	let div2;
	let button;
	let t5;
	let div6;
	let label0;
	let t6;
	let label0_for_value;
	let t7;
	let div4;
	let input0;
	let input0_id_value;
	let t8;
	let label1;
	let t9;
	let label1_for_value;
	let t10;
	let div5;
	let input1;
	let input1_id_value;
	let t11;
	let dispose;

	function click_handler(...args) {
		return /*click_handler*/ ctx[12](/*i*/ ctx[17], ...args);
	}

	function input0_input_handler_1() {
		/*input0_input_handler_1*/ ctx[13].call(input0, /*i*/ ctx[17]);
	}

	function input1_input_handler_1() {
		/*input1_input_handler_1*/ ctx[14].call(input1, /*i*/ ctx[17]);
	}

	return {
		key: key_1,
		first: null,
		c() {
			li = element("li");
			div3 = element("div");
			div1 = element("div");
			div0 = element("div");
			t0 = space();
			strong = element("strong");
			t1 = text("Fabric piece #");
			t2 = text(t2_value);
			t3 = space();
			div2 = element("div");
			button = element("button");
			button.textContent = "×";
			t5 = space();
			div6 = element("div");
			label0 = element("label");
			t6 = text("Width:");
			t7 = space();
			div4 = element("div");
			input0 = element("input");
			t8 = space();
			label1 = element("label");
			t9 = text("Length:");
			t10 = space();
			div5 = element("div");
			input1 = element("input");
			t11 = space();
			attr(div0, "class", "indicator svelte-pqvnc");
			set_style(div0, "background-color", getColor(/*fabricPiece*/ ctx[15].id));
			attr(div1, "class", "center-v left-h svelte-pqvnc");
			attr(button, "type", "button");
			attr(button, "aria-label", "Remove");
			attr(button, "title", "Remove");
			attr(button, "class", "svelte-pqvnc");
			attr(div2, "class", "flex-1 text-align-right svelte-pqvnc");
			attr(div3, "class", "center-v left-h svelte-pqvnc");
			attr(label0, "for", label0_for_value = "fabric-width-" + /*i*/ ctx[17]);
			attr(input0, "id", input0_id_value = "fabric-width-" + /*i*/ ctx[17]);
			attr(input0, "type", "number");
			attr(input0, "inputmode", "numeric");
			attr(input0, "placeholder", "10");
			attr(input0, "class", "svelte-pqvnc");
			attr(div4, "class", "input-wrap svelte-pqvnc");
			attr(label1, "for", label1_for_value = "fabric-height-" + /*i*/ ctx[17]);
			attr(input1, "id", input1_id_value = "fabric-height-" + /*i*/ ctx[17]);
			attr(input1, "type", "number");
			attr(input1, "inputmode", "numeric");
			attr(input1, "placeholder", "10");
			attr(input1, "class", "svelte-pqvnc");
			attr(div5, "class", "input-wrap svelte-pqvnc");
			attr(div6, "class", "grid grid-gap-10 pad-v-10 fabric-piece-grid svelte-pqvnc");
			attr(li, "class", "pad-v-10 svelte-pqvnc");
			this.first = li;
		},
		m(target, anchor, remount) {
			insert(target, li, anchor);
			append(li, div3);
			append(div3, div1);
			append(div1, div0);
			append(div1, t0);
			append(div1, strong);
			append(strong, t1);
			append(strong, t2);
			append(div3, t3);
			append(div3, div2);
			append(div2, button);
			append(li, t5);
			append(li, div6);
			append(div6, label0);
			append(label0, t6);
			append(div6, t7);
			append(div6, div4);
			append(div4, input0);
			set_input_value(input0, /*fabricPieces*/ ctx[1][/*i*/ ctx[17]].width);
			append(div6, t8);
			append(div6, label1);
			append(label1, t9);
			append(div6, t10);
			append(div6, div5);
			append(div5, input1);
			set_input_value(input1, /*fabricPieces*/ ctx[1][/*i*/ ctx[17]].height);
			append(li, t11);
			if (remount) run_all(dispose);

			dispose = [
				listen(button, "click", click_handler),
				listen(input0, "input", input0_input_handler_1),
				listen(input1, "input", input1_input_handler_1)
			];
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*fabricPieces*/ 2) {
				set_style(div0, "background-color", getColor(/*fabricPiece*/ ctx[15].id));
			}

			if (dirty & /*fabricPieces*/ 2 && t2_value !== (t2_value = /*i*/ ctx[17] + 1 + "")) set_data(t2, t2_value);

			if (dirty & /*fabricPieces*/ 2 && label0_for_value !== (label0_for_value = "fabric-width-" + /*i*/ ctx[17])) {
				attr(label0, "for", label0_for_value);
			}

			if (dirty & /*fabricPieces*/ 2 && input0_id_value !== (input0_id_value = "fabric-width-" + /*i*/ ctx[17])) {
				attr(input0, "id", input0_id_value);
			}

			if (dirty & /*fabricPieces*/ 2 && to_number(input0.value) !== /*fabricPieces*/ ctx[1][/*i*/ ctx[17]].width) {
				set_input_value(input0, /*fabricPieces*/ ctx[1][/*i*/ ctx[17]].width);
			}

			if (dirty & /*fabricPieces*/ 2 && label1_for_value !== (label1_for_value = "fabric-height-" + /*i*/ ctx[17])) {
				attr(label1, "for", label1_for_value);
			}

			if (dirty & /*fabricPieces*/ 2 && input1_id_value !== (input1_id_value = "fabric-height-" + /*i*/ ctx[17])) {
				attr(input1, "id", input1_id_value);
			}

			if (dirty & /*fabricPieces*/ 2 && to_number(input1.value) !== /*fabricPieces*/ ctx[1][/*i*/ ctx[17]].height) {
				set_input_value(input1, /*fabricPieces*/ ctx[1][/*i*/ ctx[17]].height);
			}
		},
		d(detaching) {
			if (detaching) detach(li);
			run_all(dispose);
		}
	};
}

// (64:8) {#if errorMessage}
function create_if_block_2(ctx) {
	let div;
	let t;

	return {
		c() {
			div = element("div");
			t = text(/*errorMessage*/ ctx[4]);
			attr(div, "class", "error-message pad-v-10 svelte-pqvnc");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t);
		},
		p(ctx, dirty) {
			if (dirty & /*errorMessage*/ 16) set_data(t, /*errorMessage*/ ctx[4]);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (67:8) {#if solution && !errorMessage}
function create_if_block_1(ctx) {
	let div;
	let t0;
	let strong;
	let t1_value = /*solution*/ ctx[5].fabricHeight + "";
	let t1;
	let t2;
	let t3;

	return {
		c() {
			div = element("div");
			t0 = text("You need a piece of fabric ");
			strong = element("strong");
			t1 = text(t1_value);
			t2 = text(" inches");
			t3 = text(" long.");
			attr(div, "class", "solution-message pad-v-10");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			append(div, strong);
			append(strong, t1);
			append(strong, t2);
			append(div, t3);
		},
		p(ctx, dirty) {
			if (dirty & /*solution*/ 32 && t1_value !== (t1_value = /*solution*/ ctx[5].fabricHeight + "")) set_data(t1, t1_value);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (72:8) {#if solution}
function create_if_block(ctx) {
	let current;

	const diagram = new Diagram({
			props: {
				items: /*solution*/ ctx[5].items,
				width: /*fabricWidth*/ ctx[2],
				height: /*solution*/ ctx[5].fabricHeight,
				increment: /*fabricSoldBy*/ ctx[0]
			}
		});

	return {
		c() {
			create_component(diagram.$$.fragment);
		},
		m(target, anchor) {
			mount_component(diagram, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const diagram_changes = {};
			if (dirty & /*solution*/ 32) diagram_changes.items = /*solution*/ ctx[5].items;
			if (dirty & /*fabricWidth*/ 4) diagram_changes.width = /*fabricWidth*/ ctx[2];
			if (dirty & /*solution*/ 32) diagram_changes.height = /*solution*/ ctx[5].fabricHeight;
			if (dirty & /*fabricSoldBy*/ 1) diagram_changes.increment = /*fabricSoldBy*/ ctx[0];
			diagram.$set(diagram_changes);
		},
		i(local) {
			if (current) return;
			transition_in(diagram.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(diagram.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(diagram, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div10;
	let h1;
	let t1;
	let p;
	let t3;
	let div9;
	let div7;
	let div4;
	let div3;
	let label0;
	let t5;
	let div0;
	let input0;
	let t6;
	let label1;
	let t8;
	let div1;
	let input1;
	let t9;
	let div2;
	let input2;
	let t10;
	let label2;
	let t12;
	let div6;
	let h2;
	let t14;
	let ul;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t15;
	let div5;
	let button;
	let t17;
	let div8;
	let t18;
	let t19;
	let t20;
	let footer;
	let current;
	let dispose;
	let each_value = /*fabricPieces*/ ctx[1];
	const get_key = ctx => /*fabricPiece*/ ctx[15].id;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	let if_block0 = /*errorMessage*/ ctx[4] && create_if_block_2(ctx);
	let if_block1 = /*solution*/ ctx[5] && !/*errorMessage*/ ctx[4] && create_if_block_1(ctx);
	let if_block2 = /*solution*/ ctx[5] && create_if_block(ctx);

	return {
		c() {
			div10 = element("div");
			h1 = element("h1");
			h1.textContent = "Fabric calculator";
			t1 = space();
			p = element("p");
			p.textContent = "This tool can calculate how much fabric you should buy based on the pieces you need to cut.\n    The default assumption is that fabric is sold by the half-yard. All values are in inches.";
			t3 = space();
			div9 = element("div");
			div7 = element("div");
			div4 = element("div");
			div3 = element("div");
			label0 = element("label");
			label0.textContent = "Width of fabric you're buying:";
			t5 = space();
			div0 = element("div");
			input0 = element("input");
			t6 = space();
			label1 = element("label");
			label1.textContent = "Fabric sold in increments of:";
			t8 = space();
			div1 = element("div");
			input1 = element("input");
			t9 = space();
			div2 = element("div");
			input2 = element("input");
			t10 = space();
			label2 = element("label");
			label2.textContent = "Allow rotation of fabric pieces";
			t12 = space();
			div6 = element("div");
			h2 = element("h2");
			h2.textContent = "Pieces of fabric";
			t14 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t15 = space();
			div5 = element("div");
			button = element("button");
			button.textContent = "Add fabric piece";
			t17 = space();
			div8 = element("div");
			if (if_block0) if_block0.c();
			t18 = space();
			if (if_block1) if_block1.c();
			t19 = space();
			if (if_block2) if_block2.c();
			t20 = space();
			footer = element("footer");

			footer.innerHTML = `
    Created by <a href="https://nolanlawson.com" target="_blank" rel="noopener">Nolan Lawson</a>.
    See the <a href="https://github.com/nolanlawson/fabric-calculator">source code</a>.
  `;

			attr(label0, "for", "fabric-width");
			attr(input0, "id", "fabric-width");
			attr(input0, "type", "number");
			attr(input0, "inputmode", "numeric");
			attr(input0, "placeholder", "45");
			attr(input0, "class", "svelte-pqvnc");
			attr(div0, "class", "input-wrap svelte-pqvnc");
			attr(label1, "for", "fabric-increment");
			attr(input1, "id", "fabric-increment");
			attr(input1, "type", "number");
			attr(input1, "inputmode", "numeric");
			attr(input1, "placeholder", "18");
			attr(input1, "class", "svelte-pqvnc");
			attr(div1, "class", "input-wrap svelte-pqvnc");
			attr(input2, "id", "fabric-rotation");
			attr(input2, "type", "checkbox");
			attr(input2, "class", "svelte-pqvnc");
			attr(label2, "for", "fabric-rotation");
			attr(div2, "class", "grid-span-2 svelte-pqvnc");
			attr(div3, "class", "grid grid-gap-20 grid-2fr-1fr svelte-pqvnc");
			attr(div4, "class", "pad-v-10 pad-h-10 svelte-pqvnc");
			attr(ul, "class", "svelte-pqvnc");
			attr(button, "type", "button");
			attr(button, "class", "svelte-pqvnc");
			attr(div5, "class", "pad-v-10");
			attr(div7, "class", "svelte-pqvnc");
			attr(div8, "class", "text-align-center svelte-pqvnc");
			attr(div9, "class", "flex flex-h-when-big svelte-pqvnc");
			attr(div10, "class", "app svelte-pqvnc");
		},
		m(target, anchor, remount) {
			insert(target, div10, anchor);
			append(div10, h1);
			append(div10, t1);
			append(div10, p);
			append(div10, t3);
			append(div10, div9);
			append(div9, div7);
			append(div7, div4);
			append(div4, div3);
			append(div3, label0);
			append(div3, t5);
			append(div3, div0);
			append(div0, input0);
			set_input_value(input0, /*fabricWidth*/ ctx[2]);
			append(div3, t6);
			append(div3, label1);
			append(div3, t8);
			append(div3, div1);
			append(div1, input1);
			set_input_value(input1, /*fabricSoldBy*/ ctx[0]);
			append(div3, t9);
			append(div3, div2);
			append(div2, input2);
			input2.checked = /*allowRotation*/ ctx[3];
			append(div2, t10);
			append(div2, label2);
			append(div7, t12);
			append(div7, div6);
			append(div6, h2);
			append(div6, t14);
			append(div6, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			append(div6, t15);
			append(div6, div5);
			append(div5, button);
			append(div9, t17);
			append(div9, div8);
			if (if_block0) if_block0.m(div8, null);
			append(div8, t18);
			if (if_block1) if_block1.m(div8, null);
			append(div8, t19);
			if (if_block2) if_block2.m(div8, null);
			append(div10, t20);
			append(div10, footer);
			current = true;
			if (remount) run_all(dispose);

			dispose = [
				listen(input0, "input", /*input0_input_handler*/ ctx[9]),
				listen(input1, "input", /*input1_input_handler*/ ctx[10]),
				listen(input2, "change", /*input2_change_handler*/ ctx[11]),
				listen(button, "click", /*addFabricPiece*/ ctx[6])
			];
		},
		p(ctx, [dirty]) {
			if (dirty & /*fabricWidth*/ 4 && to_number(input0.value) !== /*fabricWidth*/ ctx[2]) {
				set_input_value(input0, /*fabricWidth*/ ctx[2]);
			}

			if (dirty & /*fabricSoldBy*/ 1 && to_number(input1.value) !== /*fabricSoldBy*/ ctx[0]) {
				set_input_value(input1, /*fabricSoldBy*/ ctx[0]);
			}

			if (dirty & /*allowRotation*/ 8) {
				input2.checked = /*allowRotation*/ ctx[3];
			}

			if (dirty & /*fabricPieces, removeFabricPiece, getColor*/ 130) {
				const each_value = /*fabricPieces*/ ctx[1];
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, ul, destroy_block, create_each_block, null, get_each_context);
			}

			if (/*errorMessage*/ ctx[4]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(div8, t18);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*solution*/ ctx[5] && !/*errorMessage*/ ctx[4]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(div8, t19);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (/*solution*/ ctx[5]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty & /*solution*/ 32) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(div8, null);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block2);
			current = true;
		},
		o(local) {
			transition_out(if_block2);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div10);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			run_all(dispose);
		}
	};
}

const MAX_NUM_CALCULATIONS = 100;

function isValidNonzeroInteger(i) {
	return i && typeof i === "number" && i > 0;
}

function instance($$self, $$props, $$invalidate) {
	let fabricSoldBy = 18; // half a yard
	let fabricPieces = [];
	let fabricWidth = 45;
	let allowRotation = true;
	let errorMessage = "";
	let fabricId = -1;
	let solution;

	function addFabricPiece() {
		$$invalidate(1, fabricPieces = fabricPieces.concat([{ width: 10, height: 10, id: ++fabricId }]));
	}

	function removeFabricPiece(i) {
		fabricPieces.splice(i, 1);
		$$invalidate(1, fabricPieces = [...fabricPieces]); // update
	}

	function input0_input_handler() {
		fabricWidth = to_number(this.value);
		$$invalidate(2, fabricWidth);
	}

	function input1_input_handler() {
		fabricSoldBy = to_number(this.value);
		$$invalidate(0, fabricSoldBy);
	}

	function input2_change_handler() {
		allowRotation = this.checked;
		$$invalidate(3, allowRotation);
	}

	const click_handler = i => removeFabricPiece(i);

	function input0_input_handler_1(i) {
		fabricPieces[i].width = to_number(this.value);
		$$invalidate(1, fabricPieces);
	}

	function input1_input_handler_1(i) {
		fabricPieces[i].height = to_number(this.value);
		$$invalidate(1, fabricPieces);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*fabricPieces, fabricWidth, fabricSoldBy, solution, allowRotation*/ 47) {
			$: {
				function calculateFabricNeeded() {
					$$invalidate(5, solution = undefined);
					$$invalidate(4, errorMessage = "");

					if (!fabricPieces.length) {
						return;
					}

					if (fabricPieces.some(_ => !isValidNonzeroInteger(_.width) || !isValidNonzeroInteger(_.height)) || !isValidNonzeroInteger(fabricWidth) || !isValidNonzeroInteger(fabricSoldBy)) {
						return; // ignore zeroes
					}

					if (fabricPieces.some(({ width, height }) => width > fabricWidth && height > fabricWidth)) {
						$$invalidate(4, errorMessage = "One of the pieces of fabric is larger than the size of the fabric you are buying");
						return;
					}

					console.log("calculating", JSON.stringify(fabricPieces), fabricWidth, fabricSoldBy);
					let fabricHeight = fabricSoldBy;
					let timesCalculated = 0;

					while (!solution) {
						try {
							if (timesCalculated++ > MAX_NUM_CALCULATIONS) {
								console.log(`gave up after ${MAX_NUM_CALCULATIONS} calculations`);
								$$invalidate(4, errorMessage = "Could not calculate a solution to this problem");
								return;
							}

							const bins = packer(
								{
									binWidth: fabricWidth,
									binHeight: fabricHeight,
									items: fabricPieces.map(({ width, height, id }) => ({ width, height, name: id }))
								},
								{ allowRotation }
							);

							if (bins.length === 1) {
								const items = bins[0].map(item => ({
									width: item.width,
									height: item.height,
									x: item.x,
									y: item.y,
									id: item.item.name
								})).sort((a, b) => a.id < b.id ? -1 : 1);

								$$invalidate(5, solution = { items, fabricHeight });
							} else {
								fabricHeight += fabricSoldBy;
							}
						} catch(err) {
							fabricHeight += fabricSoldBy;
						}
					}

					console.log(`solution (calculated ${timesCalculated} time(s))`, solution);
				}

				calculateFabricNeeded();
			}
		}
	};

	return [
		fabricSoldBy,
		fabricPieces,
		fabricWidth,
		allowRotation,
		errorMessage,
		solution,
		addFabricPiece,
		removeFabricPiece,
		fabricId,
		input0_input_handler,
		input1_input_handler,
		input2_change_handler,
		click_handler,
		input0_input_handler_1,
		input1_input_handler_1
	];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;