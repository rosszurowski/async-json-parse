
import test from 'ava'
import parse from '.'

const sample = `{"foo":"bar","baz":"dawg"}`

test('returns a promise', async t => {
	const promise = parse(sample)
	t.ok(typeof promise.then === 'function', 'did not return a promise')
})

test('successfully parses json', async t => {
	const obj = await parse(sample)
	t.ok(obj.foo === 'bar')
	t.ok(obj.baz === 'dawg')
})


test.cb('does not block the event loop', t => {
	t.plan(2)
	let asyncTest = false
	parse(sample).then(res => {
		asyncTest = true
		t.ok(true)
		t.end()
	})
	t.ok(asyncTest === false, 'was not executed asynchronously')
})
