
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
