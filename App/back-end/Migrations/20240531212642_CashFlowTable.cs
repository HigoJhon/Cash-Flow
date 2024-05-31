using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_end.Migrations
{
    /// <inheritdoc />
    public partial class CashFlowTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Investment",
                table: "Wallets",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CashFlowId",
                table: "Wallets",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CashFlows",
                columns: table => new
                {
                    CashFlowId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WalletId = table.Column<int>(type: "int", nullable: false),
                    Expense = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Profit = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CashFlows", x => x.CashFlowId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Wallets_CashFlowId",
                table: "Wallets",
                column: "CashFlowId");

            migrationBuilder.AddForeignKey(
                name: "FK_Wallets_CashFlows_CashFlowId",
                table: "Wallets",
                column: "CashFlowId",
                principalTable: "CashFlows",
                principalColumn: "CashFlowId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Wallets_CashFlows_CashFlowId",
                table: "Wallets");

            migrationBuilder.DropTable(
                name: "CashFlows");

            migrationBuilder.DropIndex(
                name: "IX_Wallets_CashFlowId",
                table: "Wallets");

            migrationBuilder.DropColumn(
                name: "CashFlowId",
                table: "Wallets");

            migrationBuilder.AlterColumn<string>(
                name: "Investment",
                table: "Wallets",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");
        }
    }
}
