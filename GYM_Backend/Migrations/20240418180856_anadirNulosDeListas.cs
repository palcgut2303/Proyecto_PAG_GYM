using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GYM_Backend.Migrations
{
    /// <inheritdoc />
    public partial class anadirNulosDeListas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "75df8e7e-e9df-431e-b5df-8c1766a4fb3e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cf00d8b9-ca48-46c1-9c78-dfff57eff791");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "c1e20189-0dbb-497b-af6b-7dcd20f3b5b0", null, "User", "USER" },
                    { "ec5153f9-b2ef-492e-a736-4e8f026770ac", null, "Instructor", "INSTRUCTOR" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c1e20189-0dbb-497b-af6b-7dcd20f3b5b0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ec5153f9-b2ef-492e-a736-4e8f026770ac");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "75df8e7e-e9df-431e-b5df-8c1766a4fb3e", null, "User", "USER" },
                    { "cf00d8b9-ca48-46c1-9c78-dfff57eff791", null, "Instructor", "INSTRUCTOR" }
                });
        }
    }
}
