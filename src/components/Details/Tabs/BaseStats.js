import React from "react";

function BaseStats({ stats }) {
    // calculate total base stats value
    const total = stats.reduce(
        (sum, stat) => sum + parseInt(stat.base_stat),
        0
    );

    return (
        <div className="tab pokemon-base-stats">
            <table>
                <tbody>
                    <tr>
                        <td>HP</td>
                        <td>{stats[0].base_stat}</td>
                    </tr>

                    <tr>
                        <td>Attack</td>
                        <td>{stats[1].base_stat}</td>
                    </tr>

                    <tr>
                        <td>Defense</td>
                        <td>{stats[2].base_stat}</td>
                    </tr>

                    <tr>
                        <td>Sp. Atk</td>
                        <td>{stats[3].base_stat}</td>
                    </tr>

                    <tr>
                        <td>Sp. Def</td>
                        <td>{stats[4].base_stat}</td>
                    </tr>

                    <tr>
                        <td>Speed</td>
                        <td>{stats[5].base_stat}</td>
                    </tr>

                    <tr>
                        <td>Total</td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BaseStats;
