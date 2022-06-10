import Link from 'next/link';

export default function Instructions() {
    return (
        <div className="gameplay">
        <h1>Game Play </h1>
        <div>
            <p>Guess the <strong>BWORDLE</strong> in six tries.</p>
            <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
            <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
            <p><strong>A new WORDLE will be available each day!<strong></strong></strong></p><strong><strong>
            </strong></strong>
        </div>
        <h2>
        <Link href="/">
            <a>Back to home</a>
        </Link>
        </h2>
        <style jsx>{`
            .gameplay {
                width: 50%;
                margin: auto;
            }
        `}
        </style>
        </div>
    );
}